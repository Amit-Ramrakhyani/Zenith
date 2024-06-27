from flask import Flask, request, jsonify
from google.oauth2 import service_account
from googleapiclient.discovery import build
import pymongo
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all domains for simplicity

MONGO_URI = os.environ.get('MONGO_URI')
mongo_client = pymongo.MongoClient(MONGO_URI)
db = mongo_client['youtube_analytics']
collection = db['analytics']

SCOPES = ['https://www.googleapis.com/auth/youtube.readonly']
SERVICE_ACCOUNT_FILE = 'client_secret_web.json'

credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES)

youtube = build('youtube', 'v3', credentials=credentials)

@app.route('/api/youtube/analytics', methods=['GET'])
def get_analytics():
    channel_id = request.args.get('channelId')
    request = youtube.channels().list(
        part='statistics',
        id=channel_id
    )
    response = request.execute()
    data = {
        'channelId': channel_id,
        'statistics': response['items'][0]['statistics']
    }
    collection.insert_one(data)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)