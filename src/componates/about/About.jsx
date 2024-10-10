import React from 'react';
import './about.css';
import illustration from '../assets/illustration.webp'

function About(props) {
    return (
        <div className="about-container">
            <div className="about-text">
                <h3>A PROPOS DE NOUS</h3>
                <h1>SPACE-SORTIUM</h1>
                <p>
                    SPACE-SORTIUM mettra sur le marché une solution de traitement massif de données à l’usage particulier 
                    et professionnel, grâce au déploiement de la technologie du Natiomètre développée par ses associés. 
                    Cette technologie repose sur un réseau d’unités de calculs intensifs (supercalculateurs) et des terminaux 
                    adaptés à chaque type d’utilisation.
                </p>
                <p>
                    La solution, en tant qu’instrument scientifique, utilise les résultats les plus récents de la recherche 
                    en biologie, physique, mathématiques, intelligence artificielle, et sciences sociales. Elle permet un 
                    traitement croisé des données de multiples sources, offrant une vision globale sur des questions liées 
                    au vivre et travailler ensemble. La solution réduit drastiquement le temps d'intégration des découvertes 
                    scientifiques dans la prise de décision.
                </p>
                <p>
                    Grâce à un Algorithme avancé, la solution permet un traitement massif en temps réel des données relatives 
                    à la définition du phénomène nation. Programmable en langage informatique, l’Algorithme s’adapte aux 
                    différentes ressources technologiques pour une utilisation optimale.
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
