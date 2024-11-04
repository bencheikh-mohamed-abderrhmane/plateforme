import React, { useState } from 'react';
import './work.css';
import image13 from '../assets/Screenshot 2024-10-13 09.13.59.png';

import image9 from '../assets/Screenshot 2024-10-21 12.06.25.png';
import image10 from '../assets/Screenshot 2024-10-21 12.06.43.png';
import image11 from '../assets/Screenshot 2024-10-06 14.51.03.png';
import image12 from '../assets/Screenshot 2024-10-13 09.13.38.png';
import image14 from '../assets/Screenshot 2024-10-13 09.14.21.png'

import image1 from '../assets/Screenshot 2024-10-24 15.00.20.png'
import image2 from '../assets/Screenshot 2024-10-24 15.00.38.png'
import image3 from '../assets/Screenshot 2024-10-24 15.00.50.png'
import image4 from '../assets/Screenshot 2024-10-24 15.00.59.png'
import image5 from '../assets/Screenshot 2024-10-24 15.13.48.png'


import image15 from '../assets/Screenshot 2024-10-21 12.06.53.png'
import image16 from '../assets/Screenshot 2024-10-21 12.07.22.png'
import image17 from '../assets/Screenshot 2024-10-21 12.07.39.png'
import image18 from '../assets/Screenshot 2024-10-21 12.09.49.png'
import { Form } from 'react-router-dom';

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
            

           
            
            
            {/* Projet 2 - Application de Chat */}
            <div className="project">
            <h3>Site E-commerce - Vente d'Équipement de Sport</h3>
<p>Ce projet est une plateforme de vente en ligne dédiée aux équipements de sport. Il intègre un système complet de gestion des produits avec un panneau d'administration permettant d'ajouter, modifier et supprimer des articles de sport. Les utilisateurs peuvent créer un compte, gérer leur wishlist, ajouter des produits à leur panier, et finaliser leurs achats en toute sécurité grâce à un système d'authentification. L'interface utilisateur est intuitive et responsive, optimisée pour tous les appareils. Un back-end solide assure la gestion des commandes, des stocks et des promotions. Le site propose également des fonctionnalités telles que les nouveautés, les avis des clients et des recommandations personnalisées pour offrir une expérience utilisateur fluide et engageante.</p>

                <div className="project-images">
                    <img src={image9} alt="Project 2 - Image 1" onClick={() => handleImageClick(image9)} />
                    <img src={image10} alt="Project 2 - Image 2" onClick={() => handleImageClick(image10)} />

                    <img src={image15} alt="Project 2 - Image 3" onClick={() => handleImageClick(image15)} />
                    <img src={image16} alt="Project 2 - Image 4" onClick={() => handleImageClick(image16)} />
                    <img src={image17} alt="Project 2 - Image 5" onClick={() => handleImageClick(image17)} />
                    <img src={image18} alt="Project 2 - Image 6" onClick={() => handleImageClick(image18)} />
                </div>
            </div>


             <div className="project">
                <h3>Site Vitrine - Équipements Sportifs</h3> <p>Ce projet est une plateforme vitrine dédiée à la présentation des équipements sportifs de [Nom de la Marque]. Elle propose les dernières offres et produits phares de la marque, avec des informations détaillées et des visuels de qualité. Les utilisateurs peuvent facilement accéder à un lien vers une **application Android** ou un **site e-commerce** pour en savoir plus ou effectuer des achats. Le site comprend également une interface d'administration, permettant aux responsables de télécharger des images, de modifier les descriptions des produits, et de gérer le contenu du site en toute simplicité. Conçu pour être responsive et convivial, ce site offre une navigation fluide sur tous les appareils, mettant en valeur la marque et ses produits avec élégance.</p>
                <div className="project-images">
                    <img src={image1} alt="Project 1 - Image 1" onClick={() => handleImageClick(image1)} />
                    <img src={image2} alt="Project 1 - Image 2" onClick={() => handleImageClick(image2)} />
                    <img src={image3} alt="Project 1 - Image 3" onClick={() => handleImageClick(image3)} />
                    <img src={image4} alt="Project 1 - Image 4" onClick={() => handleImageClick(image4)} />
                    <img src={image5} alt="Project 1 - Image 5" onClick={() => handleImageClick(image5)} />
                   
                </div>
            </div>
            
            {/* Projet 3 - SpaceSortium */}
            <div className="project">
                <h3>SpaceSortium</h3>
                <p>Space-Sortium est une plateforme numérique révolutionnaire conçue pour intégrer et connecter divers acteurs de la société, notamment le grand public, les entreprises, les institutions de recherche, et les organismes publics. Avec pour mission de créer une Smart Nation, Space-Sortium favorise l'innovation, la collaboration, et la participation citoyenne à travers quatre réseaux interconnectés, chacun destiné à une communauté spécifique.

Les Quatre Réseaux du Space-Sortium :
Space-Sortium Grand Public : Ce réseau social offre un espace interactif où les citoyens peuvent partager des idées, participer à des discussions communautaires, et s'informer sur des sujets d'actualité. Les utilisateurs disposent de profils personnels, de groupes d'intérêt, de forums de discussion, d'événements communautaires, et d'une messagerie instantanée. Ce réseau constitue le point de départ pour connecter les individus au sein de la société.

Space-Sortium Entreprises : Destiné aux entreprises, ce réseau facilite le développement de partenariats, le recrutement de talents, et le partage des meilleures pratiques dans un environnement professionnel collaboratif. Les fonctionnalités incluent des profils d'entreprise, des offres d'emploi, des groupes de discussion sectoriels, et des outils pour renforcer le réseautage professionnel et les partenariats commerciaux.

Space-Sortium Recherche : Conçu pour les chercheurs et les établissements académiques, ce réseau favorise la collaboration scientifique et technologique à travers des projets communs. Les membres peuvent partager des publications, accéder à des bibliothèques de recherches, et obtenir des financements pour leurs projets. Les forums académiques permettent un échange d’idées fructueux entre chercheurs et sponsors potentiels.

Space-Sortium Institutions Publiques : Ce réseau permet une communication fluide entre les institutions publiques et les autres acteurs de la plateforme pour améliorer les politiques publiques et les services communautaires. Les institutions peuvent publier des annonces, organiser des consultations publiques, et collaborer avec le secteur privé dans un cadre de transparence et de responsabilité.

Fonctionnalités Transversales :
Moteur de Recherche Avancé : Accédez rapidement aux membres, entreprises, projets de recherche, et institutions publiques.
Tableau de Bord Personnalisé : Suivez les activités, les notifications, et les engagements de chaque membre.
Sécurité et Confidentialité : Garantissez la protection des données avec des protocoles de sécurité robustes.
Analyse de Données : Des outils analytiques pour fournir des insights sur les interactions et les tendances au sein de la plateforme.
Actuellement, seule la première plateforme (Grand Public) est en version Bêta, tandis que les autres réseaux sont en cours de déploiement. Ensemble, ces réseaux forment une infrastructure numérique complète pour construire un écosystème connecté et intelligent, soutenant l'innovation et le développement au sein d'une nation.</p>
                <div className="project-images">
                    <img src={image11} alt="Project 3 - Image 1" onClick={() => handleImageClick(image11)} />
                    <img src={image12} alt="Project 3 - Image 2" onClick={() => handleImageClick(image12)} />
                    <img src={image13} alt="Project 3 - Image 3" onClick={() => handleImageClick(image13)} />
                    <img src={image14} alt="Project 3 - Image 4" onClick={() => handleImageClick(image14)} />
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
