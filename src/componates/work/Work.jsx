import React, { useState } from 'react';
import './work.css';
import image13 from '../assets/Screenshot 2024-10-06 14.51.13.png';
import image1 from '../assets/Screenshot 2024-10-06 14.36.53.png';
import image2 from '../assets/Screenshot 2024-10-06 14.37.05.png';
import image3 from '../assets/Screenshot 2024-10-06 14.37.26.png';
import image4 from '../assets/Screenshot 2024-10-06 14.37.48.png';
import image5 from '../assets/Screenshot 2024-10-06 14.37.58.png';
import image6 from '../assets/Screenshot 2024-10-06 14.39.06.png';
import image7 from '../assets/Screenshot 2024-10-06 14.39.16.png';
import image8 from '../assets/Screenshot 2024-10-06 14.39.21.png';
import image9 from '../assets/Screenshot 2024-10-06 14.40.00.png';
import image10 from '../assets/Screenshot 2024-10-06 14.47.03.png';
import image11 from '../assets/Screenshot 2024-10-06 14.50.50.png';
import image12 from '../assets/Screenshot 2024-10-06 14.51.03.png';

function Work() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Fonction pour ouvrir le modal avec l'image cliquée
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    // Fonction pour fermer le modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="portfolio-container">
            <h2>Nos Derniers Projets</h2>
            
            {/* Projet 1 - E-commerce */}
            <div className="project">
                <h3>Site E-commerce - Vente de Jeux Vidéo</h3>
                <p>Ce projet est une plateforme de vente en ligne spécialisée dans les jeux vidéo. Elle comprend un système complet de gestion des produits avec un panneau d'administration pour ajouter, modifier et supprimer des jeux. Les utilisateurs peuvent créer un compte, gérer leur wishlist, ajouter des articles à leur panier, et finaliser leurs achats en toute sécurité grâce à un système d'authentification. L'interface utilisateur est fluide et optimisée pour tous les appareils, et un back-end robuste gère les commandes et les stocks. Le site est conçu pour offrir une expérience utilisateur intuitive, avec des fonctionnalités comme les promotions, les nouveautés et la gestion des avis.</p>
                <div className="project-images">
                    <img src={image1} alt="Project 1 - Image 1" onClick={() => handleImageClick(image1)} />
                    <img src={image2} alt="Project 1 - Image 2" onClick={() => handleImageClick(image2)} />
                    <img src={image3} alt="Project 1 - Image 3" onClick={() => handleImageClick(image3)} />
                    <img src={image4} alt="Project 1 - Image 4" onClick={() => handleImageClick(image4)} />
                    <img src={image5} alt="Project 1 - Image 5" onClick={() => handleImageClick(image5)} />
                    <img src={image6} alt="Project 1 - Image 6" onClick={() => handleImageClick(image6)} />
                    <img src={image7} alt="Project 1 - Image 7" onClick={() => handleImageClick(image7)} />
                    <img src={image8} alt="Project 1 - Image 8" onClick={() => handleImageClick(image8)} />
                </div>
            </div>
            
            {/* Projet 2 - Application de Chat */}
            <div className="project">
                <h3>Application de Chat en Temps Réel</h3>
                <p>Cette application de chat permet aux utilisateurs de discuter en temps réel grâce à un système d'authentification via Google. Elle assure la sauvegarde automatique des conversations, ce qui permet aux utilisateurs de retrouver leur historique à tout moment. Grâce à une interface moderne et minimaliste, l'application offre une expérience de discussion fluide, avec des notifications en temps réel et une synchronisation instantanée des messages. Parfait pour des discussions privées ou en groupe, l'application est hautement sécurisée et évolutive.</p>
                <div className="project-images">
                    <img src={image9} alt="Project 2 - Image 1" onClick={() => handleImageClick(image9)} />
                    <img src={image10} alt="Project 2 - Image 2" onClick={() => handleImageClick(image10)} />
                </div>
            </div>
            
            {/* Projet 3 - Pokélist */}
            <div className="project">
                <h3>Pokélist</h3>
                <p>Pokélist est une application qui permet aux utilisateurs d'explorer et de rechercher des Pokémon en fonction de différents critères (nom, type, etc.). L'interface est intuitive et propose des fiches détaillées pour chaque Pokémon, incluant des informations sur leurs statistiques, leurs évolutions, et leurs attaques. La liste est dynamique et se met à jour en temps réel pour offrir une expérience interactive. Conçue pour les amateurs de Pokémon, cette application est un outil amusant et éducatif, idéal pour tout fan de la série.</p>
                <div className="project-images">
                    <img src={image11} alt="Project 3 - Image 1" onClick={() => handleImageClick(image11)} />
                    <img src={image12} alt="Project 3 - Image 2" onClick={() => handleImageClick(image12)} />
                    <img src={image13} alt="Project 3 - Image 3" onClick={() => handleImageClick(image13)} />
                </div>
            </div>

            {/* Modal pour afficher l'image sélectionnée */}
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={selectedImage} alt="Selected" />
                </div>
            )}
        </div>
    );
}

export default Work;
