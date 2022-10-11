import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'



const Quiz = ({ questions }) => {
    const correct = () => toast.success('Correct Answer!', { autoClose: 500 })
    const wrong = () => toast.warning('Wrong Answer!', { autoClose: 500 })

    const { options, question, correctAnswer } = questions

    const correctHandler = (ans) => {
        if (ans === correctAnswer) {
            correct()
        }
        else {
            wrong()
        }

    }
    return (
        <div className='  lg:w-9/12 m-auto border-4 my-5 shadow-xl p-8 bg-blue-200 '>
            <ol>
                <li>
                    <div className='flex align-center justify-between '>
                        <h1 className='text-xl mb-8 border-2 py-3 px-10 bg-purple-400' ><strong>Question:</strong>{question}</h1>
                        <button><FontAwesomeIcon className='text-2xl' icon={faEye}></FontAwesomeIcon></button>

                    </div>
                    <div className=' lg:grid grid-rows-2 grid-flow-col gap-4 ' >
                        {options.map(option => <label className='border-2 bg-purple-300 p-3'>
                            <input onClick={() => correctHandler(option)} type='radio' value='option1' />
                            {option}
                        </label>
                        )}
                    </div>

                </li>
            </ol>
        </div>
    );
};

export default Quiz;