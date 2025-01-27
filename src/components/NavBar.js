import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src='/LOGO_official.png' alt='Mentor Amp Logo'/>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar
