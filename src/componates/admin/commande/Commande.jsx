import React, { useEffect, useState } from 'react';
import { db } from '../../login/firebase'; // Import de la configuration Firebase
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import './commande.css';

function Commande() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'projects'));
                const projectsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProjects(projectsData);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets :", error);
            }
        };

        fetchProjects();
    }, []);

    // Liste des statuts possibles pour une commande
    const orderStatuses = ['Prise de contact', 'En cours de livraison', 'Livraison terminée'];

    // Fonction pour changer le statut d'une commande
    const updateOrderStatus = async (projectId, newStatus) => {
        try {
            const projectRef = doc(db, 'projects', projectId);
            await updateDoc(projectRef, { status: newStatus });
            setProjects(projects.map((project) =>
                project.id === projectId ? { ...project, status: newStatus } : project
            ));
            console.log(`Statut mis à jour pour le projet ${projectId}: ${newStatus}`);
        } catch (error) {
            console.error("Erreur lors de la mise à jour du statut :", error);
        }
    };

    return (
        <div className="commande">
            <h2>Liste des Commandes</h2>
            {projects.length > 0 ? (
                <ul className="commande-list">
                    {projects.map((project) => (
                        <li key={project.id} className="commande-item">
                            <h3>Description: {project.description}</h3>
                            <p>Offre : {project.offerId}</p>
                            <p>Domaine : {project.domain}</p>
                            <p>Fonctionnalités : {project.features}</p>
                            <p>Numéro de téléphone : {project.phoneNumber}</p>
                            <p>monnaie: {project.currency}</p>
                            {project.imageUrl && (
                                <img src={project.imageUrl} alt="Projet" className="commande-image" />
                            )}
                            <p>Utilisateur : {project.userEmail}</p>
                            
                            {/* Ajout du statut de commande */}
                            <p>Statut : {project.status || 'Non défini'}</p>
                            
                            {/* Menu pour changer le statut */}
                            <select
                                value={project.status || 'Prise de contact'}
                                onChange={(e) => updateOrderStatus(project.id, e.target.value)}
                            >
                                {orderStatuses.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun projet trouvé.</p>
            )}
        </div>
    );
}

export default Commande;
