import React from 'react';

const Quiz = ({ questions }) => {
    const { options, question } = questions
    console.log(questions)
    return (
        <div className='w-9/12 m-auto border-4 my-5 shadow-xl p-8 bg-blue-200 '>
            <ol >
                <li>
                    <h1 className='text-2xl mb-8 ' ><strong>Question:</strong>{question}</h1>
                    <div className='grid grid-rows-2 grid-flow-col gap-4' >
                        {options.map(option => <li>{option}</li>)}
                    </div>

                </li>
            </ol>
        </div>
    );
};

export default Quiz;