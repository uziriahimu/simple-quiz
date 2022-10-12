import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CorrectAnswer = () => {
    const answer = useLoaderData()
    const { correctAnswer } = answer
    console.log(answer)

    return (
        <div>
            <p>{correctAnswer}</p>
        </div>
    );
};

export default CorrectAnswer;