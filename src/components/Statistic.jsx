import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Statistic = (topic) => {
    const { id, name, logo, total } = topic
    return (
        <div>
            <LineChart width={500} height={400} data={id}>
                <XAxis />
                <YAxis dataKey="name" />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                {/* <Line type="monotone" dataKey="total" stroke="#82ca9d"></Line> */}
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistic;