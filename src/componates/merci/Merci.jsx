import React from 'react';
import { useNavigate } from 'react-router-dom';
import './merci.css'; // Ajoutez du style si nécessaire

const Merci = () => {
  const navigate = useNavigate();

  // Retour à la page d'accueil ou autre, si nécessaire
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="merci-container">
      <h2>Votre demande a bien été prise en compte</h2>
      <p>Nous vous contacterons dans les plus brefs délais.</p>
      <button className="btn" onClick={handleGoBack}>
        Retour à l'accueil
      </button>
    </div>
  );
};

export default Merci;
