import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../assets/logo-removebg-preview.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../login/firebase'; // Importer Firebase Auth et Firestore
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useState(null); // Utilisateur connecté
    const [isAdmin, setIsAdmin] = useState(false); // Vérifier si l'utilisateur est admin
    const navigate = useNavigate();

    // Vérifie si un utilisateur est connecté
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Récupérer le document utilisateur dans Firestore
                const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setIsAdmin(userData.role === 'admin'); // Vérifier si l'utilisateur est admin
                }
            }
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
            <ul className= {isMobile ? "navbar-menu-mobile active" : "navbar-menu" } onClick={() => setIsMobile(false)}>
                <li><Link to='/'>Création de site vitrine et e-commerce</Link></li>
                <li><Link to='/service'>Services</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>

                {/* Si l'utilisateur est admin, afficher le lien Admin */}
                {isAdmin && (
                    <li><Link to='/admin'>Admin</Link></li>
                )}

                {/* Espace client dans le menu mobile */}
                <li>
                    {user ? (
                        <button onClick={handleLogout} className="logout-button">Déconnexion</button>
                    ) : (
                        <Link to='/login'>Espace client</Link>
                    )}
                </li>
            </ul>

            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <>&#10005;</> : <>&#9776;</>}
            </button>
        </nav>
    );
}

export default Navbar;
