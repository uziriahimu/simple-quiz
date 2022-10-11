import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useNavigate } from 'react-router-dom';




const Quiz = ({ questions }) => {
    const { options, question, id, correctAnswer } = questions
    // console.log(questions)
    const navigate = useNavigate()
    const answerHandler = id => {
        console.log('click')
        navigate(`/topic/${id}`)

    }

    return (
        <div className='  lg:w-7/12 m-auto border-4 my-5 shadow-xl p-8 bg-blue-200 '>
            <ol >
                <li>
                    <div className='flex align-center justify-between '>
                        <h1 className='text-2xl mb-8 ' ><strong>Question:</strong>{question}</h1>
                        <button onClick={() => answerHandler(id)}><FontAwesomeIcon className='text-2xl' icon={faEye}></FontAwesomeIcon></button>

                    </div>
                    <div className=' lg:grid grid-rows-2 grid-flow-col gap-4' >
                        {options.map(option => <li><button><FontAwesomeIcon className=' lg:mr-5' icon={faCircle}></FontAwesomeIcon>{option}</button></li>
                        )}
                    </div>

                </li>
            </ol>



        </div>
    );
};

export default Quiz;