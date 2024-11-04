import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../login/firebase'; // Importer la configuration Firebase
import './admincontact.css';

function AdminContact() {
    const [messages, setMessages] = useState([]); // État pour stocker les messages
    const [loading, setLoading] = useState(true); // État pour indiquer si les données sont en cours de chargement
    const [error, setError] = useState(null); // État pour stocker les erreurs

    // Fonction pour récupérer les messages depuis Firestore
    const fetchMessages = async () => {
        setLoading(true);
        setError(null);
        try {
            const querySnapshot = await getDocs(collection(db, 'support')); // Récupérer les documents de la collection 'support'
            const messagesArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(messagesArray); // Mettre à jour l'état avec les messages récupérés
        } catch (err) {
            console.error("Erreur lors de la récupération des messages:", err);
            setError("Une erreur est survenue lors de la récupération des messages.");
        } finally {
            setLoading(false); // Arrêter le chargement une fois les données récupérées
        }
    };

    // Utiliser useEffect pour récupérer les messages dès que le composant est monté
    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className="admin-contact-container">
            <h2>Messages reçus</h2>

            {/* Affichage d'un message de chargement */}
            {loading && <p>Chargement des messages...</p>}

            {/* Affichage d'un message d'erreur */}
            {error && <p className="error-message">{error}</p>}

            {/* Affichage de la liste des messages */}
            <ul className="message-list">
                {!loading && messages.length === 0 && <p>Aucun message reçu pour l'instant.</p>}

                {messages.map((message) => (
                    <li key={message.id} className="message-item">
                        <p><strong>Nom:</strong> {message.name}</p>
                        <p><strong>Email:</strong> {message.email}</p>
                        <p><strong>Téléphone:</strong> {message.phone}</p>
                        <p><strong>Sujet:</strong> {message.subject}</p>
                        <p><strong>Message:</strong> {message.message}</p>
                        <p><strong>Date:</strong> {new Date(message.timestamp.seconds * 1000).toLocaleString()}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminContact;
