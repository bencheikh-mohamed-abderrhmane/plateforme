import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../login/firebase'; // Assurez-vous que firebase.js est correctement configuré
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Ajoute les données à la collection "support"
            await addDoc(collection(db, 'support'), {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                phone: formData.phone,
                message: formData.message,
                timestamp: new Date()
            });
            alert("Message envoyé avec succès!");
            setFormData({ name: '', email: '', subject: '', phone: '', message: '' }); // Réinitialise le formulaire
        } catch (error) {
            console.error("Erreur lors de l'envoi du message: ", error);
            alert("Erreur lors de l'envoi du message. Réessayez plus tard.");
        }
    };

    return (
        <div className="contact-container">
            {/* Left side: Contact information */}
            <div className="contact-info">
                <div>
                    <h4>SPACE SORTIUM</h4>
                    <p>Cyber Parc, Sidi Abdellah N°CA-E1-M16, ALGER, ALGER 16 000, DZ</p>
                </div>
                <div>
                    <h4>Appelez nous</h4>
                    <p>+213 555 19 35 92</p>
                </div>
                <div>
                    <h4>Envoyez un email</h4>
                    <p>contact@gisnt.org</p>
                </div>
                <div>
                    <h4>Nous sommes disponibles</h4>
                    <p>Dimanche - Jeudi<br/>08h30 - 17h00</p>
                </div>
            </div>

            {/* Right side: Contact form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Envoyer message</button>
            </form>
        </div>
    );
}

export default Contact;
