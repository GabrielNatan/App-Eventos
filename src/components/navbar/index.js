import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
function Navbar(){
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Events</h1> 
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Page2</li>
                </ul>
            </nav>

        </div>
    ) 
}

export default Navbar;