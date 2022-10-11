import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircle } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';



const Quiz = ({ questions }) => {
    // const value = useLoaderData()
    const { options, question, id, correctAnswer } = questions
    // console.log(questions)
    // const navigate = useNavigate()


    const correctHandler = () => {

        if (correctAnswer) {
            return toast.success('Correct Answer!', { autoClose: 500 })
        }
        return toast.warning('Wrong Answer!', { autoClose: 500 })
    }
    return (
        <div className='  lg:w-9/12 m-auto border-4 my-5 shadow-xl p-8 bg-blue-200 '>
            <ol >
                <li>
                    <div className='flex align-center justify-between '>
                        <h1 className='text-xl mb-8 border-2 py-3 px-10 bg-purple-400' ><strong>Question:</strong>{question}</h1>
                        <button><FontAwesomeIcon className='text-2xl' icon={faEye}></FontAwesomeIcon></button>

                    </div>
                    <div className=' lg:grid grid-rows-2 grid-flow-col gap-4 ' >
                        {options.map(option => <li className='border-2 p-3 bg-purple-300'><button onClick={correctHandler}>{option}</button></li>
                        )}
                    </div>

                </li>
            </ol>



        </div>
    );
};

export default Quiz;