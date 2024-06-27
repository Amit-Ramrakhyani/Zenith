const axios = require('axios');
const express = require('express');
const router = express.Router();

// Replace 'localhost:5001' with the actual URL of your Flask server if it's different
const FLASK_API_URL = 'http://localhost:5001/api/youtube/analytics';

router.get('/analytics', async (req, res) => {
    const channelId = req.query.channelId; // Get the channelId from the request query parameters

    if (!channelId) {
        return res.status(400).send('Channel ID is required');
    }

    try {
        const response = await axios.get(FLASK_API_URL, {
            params: { channelId: channelId }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Flask API:', error);
        res.status(500).send('Error fetching data from Flask API');
    }
});

module.exports = router;
