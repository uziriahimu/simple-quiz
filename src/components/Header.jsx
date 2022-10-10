import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-2xl p-6">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Quiz</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex={0}>
                            <Link to='/home' >Home</Link>

                        </li>
                        <li>
                            <Link to='/topics' >Topics</Link>
                        </li>

                        <li tabIndex={0}>
                            <Link to='/statistic' >Statistic</Link>

                        </li>
                        <li>
                            <Link to='/blog' >Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;