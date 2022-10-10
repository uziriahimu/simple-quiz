import React from 'react';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic
    return (
        <div>

            <div className="card w-96  bg-gray-400">
                <figure><img src={logo} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Start Practice</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;