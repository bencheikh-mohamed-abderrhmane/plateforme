import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importation de useNavigate
import { db, storage } from "../login/firebase"; 
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth"; 
import axios from 'axios';
import './form.css'

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    description: "",
    domain: "",
    features: "",
    phoneNumber: "",
  });
  const [image, setImage] = useState(null);
  const [domainAvailability, setDomainAvailability] = useState(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialiser useNavigate

  const location = useLocation(); 
  const { offerId } = location.state || {}; 

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const checkDomain = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://domain-availability.whoisxmlapi.com/api/v1`, {
        params: {
          apiKey: 'at_DZ6KUWBbSEJvZP8uG5vv5Xx2lOXj8',
          domainName: projectData.domain, 
        },
      });
      setDomainAvailability(response.data.DomainInfo.domainAvailability);
    } catch (error) {
      console.error('Erreur lors de la vérification du domaine :', error);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.error("Utilisateur non authentifié");
      return;
    }

    if (!offerId) {
      console.error("ID de l'offre manquant");
      return;
    }

    try {
      let imageUrl = "";

      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "projects"), {
        ...projectData,
        imageUrl,
        createdAt: new Date(),
        offerId,
        userEmail: user.email,
      });

      // Rediriger vers la page "Merci" après la soumission réussie
      navigate('/merci');

    } catch (error) {
      console.error("Erreur lors de l'enregistrement du projet : ", error);
    }
  };

  return (
    <div>
      <h2>Créer un Projet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={projectData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="features"
          placeholder="Fonctionnalités"
          value={projectData.features}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Numéro de téléphone"
          value={projectData.phoneNumber}
          onChange={handleChange}
          required
        />

        <input 
          type="text" 
          name="domain" 
          placeholder="Nom de domaine souhaité" 
          value={projectData.domain} 
          onChange={handleChange}
          required 
        />

        <button type="button" onClick={checkDomain} disabled={loading || !projectData.domain}>
          {loading ? 'Vérification...' : 'Vérifier la disponibilité du domaine'}
        </button>

        {domainAvailability && (
          <p>
            Le domaine est {domainAvailability === 'AVAILABLE' ? 'disponible' : 'non disponible'}.
          </p>
        )}

        <input type="file" onChange={handleImageChange} />
        <button type="submit">Soumettre le projet</button>
      </form>
    </div>
  );
};

export default ProjectForm;