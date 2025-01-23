import React from "react";
import"./NavBar.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import logoNav from "../Image/logoNav.jpeg";

function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    const handleLinkClick = () => {
        if (window.innerWidth <= 820) {
            setShowLinks(false);
        }
    };

    const handleSectionClick = (sectionId) => (e) => {
        e.preventDefault();
        
        // Si nous sommes déjà sur la page des créations
        if (location.pathname === '/creations') {
            const element = document.getElementById(sectionId);
            if (element) {
                const offset = 140; // hauteur de la navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            // Si nous ne sommes pas sur la page des créations, naviguer puis scroller
            navigate('/creations', { state: { scrollTo: sectionId } });
        }
    };

    // Effet pour gérer le scroll après la navigation
    React.useEffect(() => {
        if (location.pathname === '/creations' && location.state?.scrollTo) {
            setTimeout(() => {
                const element = document.getElementById(location.state.scrollTo);
                if (element) {
                    const offset = 140;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location]);

    // Structure du menu dropdown
    const dropdownItems = [
        { id: 'yoshi', label: 'Yoshi' },
        { id: 'coeur', label: 'Coeur' },
        { id: 'fleurs', label: 'Fleurs' },
        { id: 'rangements', label: 'Rangements' },
        { id: 'recoltes-forestieres', label: 'Récoltes forestières' },
        { id: 'animaux-de-la-mer', label: 'Animaux de la mer' },
        { id: 'plante-exotique', label: 'Plante exotique' },
        { id: 'energie-positive', label: 'Énergie positive' },
        { id: 'evenements', label: 'Évènements' }
    ];

    return (
        <nav className={`navbar ${showLinks ? "show_nav" : "hide_nav"}`}>
            <div>
                <Link to="/" className="logoLink" onClick={handleLinkClick}>
                    <img src={logoNav} alt="logo" className="logoNav" />
                </Link>
            </div>
            <ul className="navbar_links">
                <li className="navbar_item">
                    <Link to="/" className={`navbar_link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleLinkClick}>
                        Accueil
                    </Link>
                </li>
                <li className="navbar_item dropdown">
                    <Link to="/creations" className={`navbar_link ${location.pathname.includes('/creations') ? 'active' : ''}`} onClick={handleLinkClick}>
                        Mes créations
                    </Link>
                    <ul className="dropdown_content">
                        {dropdownItems.map(item => (
                            <li key={item.id}>
                                <a
                                    href={`/creations#${item.id}`}
                                    className="dropdown_link"
                                    onClick={handleSectionClick(item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="navbar_item">
                    <Link to="/cadeaux" className={`navbar_link ${location.pathname === '/cadeaux' ? 'active' : ''}`} onClick={handleLinkClick}>
                        Idées cadeaux
                    </Link>
                </li>
                <li className="navbar_item">
                    <Link to="/contact" className={`navbar_link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleLinkClick}>
                        Contact
                    </Link>
                </li>
            </ul>
            <button 
                className="navbar_burger" 
                onClick={handleShowLinks}
                aria-label="Menu"
                aria-expanded={showLinks}
            >
                <span className="burger_bar"></span>
            </button>
        </nav>
    );
}

export default NavBar;