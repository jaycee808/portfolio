import React, { useState } from 'react';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav id="navbar">
        <div className="nav-center">
            <div className="nav-header">
                <h1>Jamie Clark</h1>
                <button className="nav-toggle" onClick={handleToggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>

        <div
            id="menu-links"
            className={`links-container ${showLinks ? 'show-container' : ''}`}
        >
            <ul className="links">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>

        <div
            id="social-icons"
            className={`links-container ${showLinks ? 'show-container' : ''}`}
        >
            <ul className="links">
                <li>
                    <a href="https://github.com/jaycee808" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fas fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    );
};

export default Navbar;
