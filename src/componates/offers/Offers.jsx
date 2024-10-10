import React from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../login/firebase'; // Assurez-vous d'importer votre instance de Firestore
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../login/firebase'; // Importation de l'auth Firebase
import './offers.css'; // Importation du fichier CSS

function Offers() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth); // Obtenir l'utilisateur actuellement connecté

    const offers = [
        {
            id: 'offer1',
            title: ' Site Web Basique (5 pages personnalisées, design responsive)',
            description: 'Transformez la présence en ligne de votre entreprise avec un site web professionnel et moderne Ce service inclut jusqu à 5 pages personnalisées pour présenter vos services ou produits, une mise en page intuitive et responsive pour une expérience utilisateur optimale sur tous les appareils. Idéal pour les petites entreprises ou les indépendants souhaitant établir une présence en ligne efficace sans complications techniques',
            price: ' 40,000 à 80,000 DZD',
        },
        {
            id: 'offer2',
            title: 'Site Web e-Commerce Site Web e-Commerce (système de paiement, catalogue de produits, SEO)',
            description: 'Transformez votre entreprise avec un site e-commerce moderne et sécurisé. Ce service inclut un design responsive et intuitif, une gestion facile du catalogue de produits, un système de paiement sécurisé, et une optimisation SEO pour améliorer votre visibilité en ligne. Idéal pour les petites et moyennes entreprises souhaitant vendre en ligne rapidement et efficacement.',
            price: '200,000 à 350,000 DZD',
        },
        {
            id: 'offer3',
            title: 'Application Mobile (iOS/Android, application native)',
            description: 'Développez une application mobile native performante pour iOS et Android, adaptée aux besoins spécifiques de votre entreprise. Nous vous accompagnons dans la création d une interface utilisateur fluide et attrayante, avec des fonctionnalités robustes, des performances optimisées, et une compatibilité totale avec les dernières technologies mobiles Parfait pour les entreprises cherchant à engager leur audience avec une application mobile sur mesure.',
            price: '500,000 à 1,200,000 DZD',
        },
        {
            id: 'offer4',
            title: 'SEO & Marketing Digital (optimisation SEO, mots-clés, stratégie marketing)',
            description: "Améliorez la visibilité de votre site sur les moteurs de recherche grâce à une optimisation SEO complète. Ce service inclut l’analyse des mots-clés, l'optimisation du contenu, la mise en place des meilleures pratiques de référencement, ainsi que des stratégies de marketing digital pour augmenter le trafic et améliorer votre positionnement. Idéal pour booster votre présence en ligne et attirer de nouveaux clients.",
            price: ' 50,000 à 150,000 DZD',
        },
        {
            id: 'offer5',
            title: 'Maintenance & Support Technique (mises à jour, corrections de bugs)',
            description: 'Assurez-vous que votre site web fonctionne toujours de manière fluide grâce à notre service de maintenance et support technique. Nous vous proposons des mises à jour régulières, des corrections de bugs, ainsi qu’une assistance technique pour répondre rapidement à vos besoins. Idéal pour garder votre site à jour et sécurisé sans tracas.  ',
            price: '10,000 à 20,000 DZD/mois',
        },
        {
            id: 'offer6',
            title: 'Design UI/UX sur mesure (interfaces intuitives, design unique)',
            description: "Créez des interfaces utilisateurs attrayantes et intuitives avec notre service de design UI/UX sur mesure. Nous concevons des expériences visuelles engageantes, axées sur l'utilisateur, qui amélioreront la navigation et la satisfaction de vos clients. Idéal pour les entreprises qui cherchent à se démarquer avec un design unique et efficace.",
            price: ' 100,000 à 300,000 DZD',
        }
    ];

    const handlePurchaseClick = async (offerId) => {
        if (!user) {
            navigate('/login'); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
        } else {
            try {
                // Ajouter l'offre sélectionnée dans Firestore
                await addDoc(collection(db, 'choix-utilisateurs'), {
                    userId: user.uid,  // Identifiant de l'utilisateur connecté
                    offerId: offerId,  // Identifiant de l'offre sélectionnée
                    timestamp: new Date(), // Date et heure de l'achat  

                });

                console.log("Choix enregistré avec succès !");
                
                // Rediriger vers le formulaire de projet avec l'ID de l'offre
                navigate('/projectform', { state: { offerId: offerId } });


            } catch (error) {
                console.error("Erreur lors de l'enregistrement du choix : ", error);
            }
        }
    };

    return (
        <div className="offers-container">
            {offers.map((offer) => (
                <div className="offer-card" key={offer.id}>
                    <h2>{offer.title}</h2>
                    <p>{offer.description}</p>
                    <p className="price">{offer.price}</p>
                    <button className="btn" onClick={() => handlePurchaseClick(offer.id)}>
                        Acheter maintenant
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Offers;
