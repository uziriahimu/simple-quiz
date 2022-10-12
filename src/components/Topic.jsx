import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const Topic = ({ topic }) => {

    const { id, name, logo, total } = topic;
    const navigate = useNavigate()
    const handleStartQuiz = () => {
        navigate(`/topic/${id}`)

    }
    return (
        <div>

            <div className="card w-96  bg-gray-400">
                <figure><img src={logo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 > Total: {total}</h2>

                    <div className="card-actions justify-end">
                        <button onClick={handleStartQuiz} className="btn btn-primary">Start Practice <FontAwesomeIcon className='ml-5 text-xl' icon={faArrowAltCircleRight}></FontAwesomeIcon> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;