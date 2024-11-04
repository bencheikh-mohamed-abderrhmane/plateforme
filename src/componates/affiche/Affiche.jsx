import React, { useEffect, useState } from 'react';
import './affiche.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../login/firebase'; // Importation de Firebase Auth
import { onAuthStateChanged } from 'firebase/auth';



function Affiche() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Surveiller l'état de connexion de l'utilisateur
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    // Fonction pour gérer le clic sur "Acheter maintenant"
    const handlePurchaseClick = () => {
        if (!user) {
            navigate('/login'); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
        } else {
            // Logique d'achat ici pour les utilisateurs connectés
            console.log("Utilisateur connecté, procéder à l'achat");
            navigate('/service')
        }
    };

    return (
        <div className='affiche'>
            <div className="product">
                <h3>Site Statique</h3>
                <p className='price'>Prix européen 150 à 300 €</p>
                <p className="price">40,000 à 80,000 DZD</p>
               
               
                <ul>

                    <li>Création de site statique (HTML, CSS)</li>
                    <li>Optimisation SEO de base</li>
                    <li>Hébergement inclus pour 1 an</li>
                    <li>Mise en ligne rapide</li>
                </ul>
                <button className="buy-btn" onClick={handlePurchaseClick}>
                    en savoir plus
                </button>
            </div>

            <div className="product">
                <h3>Site E-commerce avec Maintenance (4 ans)</h3>
                <p className='price'>Prix européen :760 à 1,340 €</p>
                <p className="price"> 200,000 à 350,000 DZD</p>
                
                <ul>
                    <li>Création de site E-commerce</li>
                    <li>Intégration de paiement en ligne sécurisé</li>
                    <li>Support technique et maintenance pendant 4 ans</li>
                    <li>Gestion de produits et inventaire</li>
                </ul>
                <button className="buy-btn" onClick={handlePurchaseClick}>
                    en savoir plus
                </button>
            </div>
        </div>
    );
}

export default Affiche;
