import React from 'react';
import './about.css';
import illustration from '../assets/illustration.webp'

function About(props) {
    return (
        <div className="about-container">
            <div className="about-text">
                <h3>A PROPOS DE NOUS</h3>
                <h1 className='quentum'>QUENTUM SPACE</h1>
                <p>
                Bienvenue chez Quentum Space.
Filiale de Space Sortium, Quentum Space est une entreprise innovante spécialisée dans le développement web à la pointe
 de la technologie. Nous proposons des solutions complètes pour la conception et la création de sites web et d’applications mobiles
 , avec une expertise approfondie dans l’intégration de l’intelligence artificielle (IA) et une orientation vers les applications
  révolutionnaires de l’informatique quantique
                </p>
                <p>
                Que vous soyez une entreprise cherchant à transformer votre présence en ligne ou à implémenter des technologies
                 de pointe pour optimiser vos services, Quentum Space est votre partenaire privilégié pour des solutions sur mesure
                 . Grâce à notre équipe d'experts passionnés,
                 nous combinons créativité, savoir-faire technologique et innovation pour faire de vos projets une réalité.
                </p>
               
              <a href="https://beta.gisnt.org/site-pages/spas-space-sortium"><button className="learn-more">En savoir plus →</button></a>  
            </div>
            <div className="about-image">
                <img src={illustration} alt="Space Sortium" />
            </div>
        </div>
    );
}

export default About;
