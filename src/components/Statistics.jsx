import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from './Statistic';



const Statistics = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data
    return (
        <div>
            {
                topics.map(topic => <Statistic
                    key={topic.id}
                    topic={topic}
                ></Statistic>)
            }

        </div>
    );
};

export default Statistics;