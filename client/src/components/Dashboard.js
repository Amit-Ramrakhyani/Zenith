import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/youtube/analytics?channelId=YOUR_CHANNEL_ID');
                setData(res.data.statistics);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    const chartData = {
        labels: ['Subscribers', 'Total Views', 'Total Comments'],
        datasets: [
            {
                label: 'YouTube Analytics',
                data: [
                    data.subscriberCount,
                    data.viewCount,
                    data.commentCount
                ],
                backgroundColor: 'rgba(75,192,192,1)',
            }
        ]
    };

    return (
        <div>
            <h2>YouTube Analytics Dashboard</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default Dashboard;
