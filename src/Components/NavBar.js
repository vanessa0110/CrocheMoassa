import React from "react";
import"./NavBar.css"
import { Link, useLocation} from 'react-router-dom';
import {useState} from "react"
import logoNav from "../Image/logoNav.jpeg";

function NavBar() {
    const location = useLocation();
    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }


    return (
        <nav className={`navbar ${showLinks ? "show_nav": "hide_nav"}`}>
            <div>
                <Link to="/" className="logoLink">
                    <img src={logoNav} alt="logo" className="logoNav" />
                </Link>
            </div>
            <ul className="navbar_links">
                <li className="navbar_item">
                    <Link to="/" className={`navbar_link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
                </li>
                <li className="navbar_item">
                    <Link to="/creations" className={`navbar_link ${location.pathname === '/creations' ? 'active' : ''}`}>Mes créations</Link>
                </li>
                <li className="navbar_item">
                    <Link to="/cadeaux" className={`navbar_link ${location.pathname === '/cadeaux' ? 'active' : ''}`}>Idées cadeaux</Link>
                </li>
                <li className="navbar_item">
                    <Link to="/contact" className={`navbar_link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}

export default NavBar;