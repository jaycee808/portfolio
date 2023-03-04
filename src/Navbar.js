import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// const NavbarOne = () => {
//     const [showLinks, setShowLinks] = useState(false);

//     const handleToggle = () => {
//         setShowLinks(!showLinks);
//     };

//     return (
//         <nav id="navbar">
//         <div className="nav-center">
        
//             <div className="nav-header">
//                 <h1>Jamie Clark</h1>
//                 <button className="nav-toggle" onClick={handleToggle}>
//                     <i className="fas fa-bars"></i>
//                 </button>
//             </div>

//         <div
//             id="menu-links"
//             className={`links-container ${showLinks ? 'show-container' : ''}`}
//         >
//             <ul className="links">
//                 <li>
//                     <a href="#">About</a>
//                 </li>
//                 <li>
//                     <a href="#">Projects</a>
//                 </li>
//                 <li>
//                     <a href="#">Contact</a>
//                 </li>
//             </ul>
//         </div>

//         <div
//             id="social-icons"
//             className={`links-container ${showLinks ? 'show-container' : ''}`}
//         >
//             <ul className="links">
//                 <li>
//                     <a href="https://github.com/jaycee808" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-github"></i>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                     <i className="fab fa-linkedin"></i>
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#">
//                     <i className="fas fa-envelope"></i>
//                     </a>
//                 </li>
//             </ul>
//         </div>
//         </div>
//     </nav>
//     );
// };

function Navbar () {

    const [showLinks, setShowLinks] = useState(false);

    const handleToggle = () => {
        setShowLinks(!showLinks);
    };
    
    return (
        // <div id="navbar">
            <ul id="navbar" className="nav-header">
                <li className="nav-item">
                    <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    <h1>JC</h1>
                    </NavLink>
                </li>

                <div
                id="menu-links"
                className={`links-container ${showLinks ? 'show-container' : ''}`}>

                <li className="nav-item">
                    <NavLink
                    to="about"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    About
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                    to="projects"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    Projects
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                    to="contact"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    Contact
                    </NavLink>
                </li>
                </div>
                <button className="nav-toggle" onClick={handleToggle}>
                    <i className="fas fa-bars"></i>
                </button>
            </ul>
        // </div>
    );
}


export default Navbar;
