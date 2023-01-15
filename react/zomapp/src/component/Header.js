import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header>
                <div id="icon">
                    <h1>Devomato</h1>
                    <Link className="btn btn-info" to="/">Home</Link>
                </div>
                <div id="social">
                    <button id="login">Login</button>
                    <button id="register">Regitser</button>
                </div>
            </header>
        </>
    )
}

export default Header