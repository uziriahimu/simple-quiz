import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const TopicDetails = () => {
    const quizs = useLoaderData()
    const quiz = quizs.data.questions
    // console.log(quiz)

    return (
        <div>
            {
                quiz.map(questions => <Quiz
                    key={questions.id}
                    questions={questions}
                ></Quiz>)
            }

        </div>
    );
};

export default TopicDetails;