import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header" style={{ backgroundColor: 'black', textAlign: 'right' }}>
            <nav>
                <a href="/home">Home</a>
                <a href="/Contact">Contact Us</a>
                <a href="/login">LogIN</a>
            </nav>
        </div>
    );
};

export default Header;