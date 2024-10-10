import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../login/firebase'; // Importer l'authentification Firebase
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useState(null); // Utilisateur connecté
    const navigate = useNavigate();

    // Vérifie si un utilisateur est connecté
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    // Fonction pour gérer la déconnexion
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirige vers la page de login après déconnexion
        } catch (error) {
            console.error("Erreur de déconnexion", error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="SPACE SORTIUM" /> 
            </div>
            <ul className={isMobile ? "navbar-menu-mobile active" : "navbar-menu"} onClick={() => setIsMobile(false)}>
                <li><Link to='/'>Création de site vitrine et e-commerce</Link></li>
                <li><Link to='/service'>Service</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
            </ul>

            <div className="navbar-client">
                {/* Si un utilisateur est connecté, afficher "Déconnexion", sinon "Espace client" */}
                {user ? (
                    <button onClick={handleLogout} className="logout-button">Déconnexion</button>
                ) : (
                    <Link to='/login'>Espace client</Link>
                )}
            </div>

            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <>&#10005;</> : <>&#9776;</>}
            </button>
        </nav>
    );
}

export default Navbar;
