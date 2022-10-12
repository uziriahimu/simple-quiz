import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const statistic = useLoaderData();
    // console.log(statistic)

    return (
        <div className=' mt-10 mb-40 lg:flex align-center justify-center'>
            <LineChart width={400} height={400} data={statistic.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />

                <Tooltip />
            </LineChart>

        </div>
    );
};

export default Statistics;