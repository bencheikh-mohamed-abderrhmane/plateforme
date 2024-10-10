import React, { useState } from 'react';
import './questions.css';

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Quels sont les services inclus dans la création d'un site web ?",
            answer: "Nos services incluent la conception, le développement, l'intégration de contenu, et l'optimisation SEO pour garantir que votre site soit performant."
        },
        {
            question: "Combien de temps faut-il pour créer un site web ?",
            answer: "Le délai moyen pour créer un site web dépend de la complexité du projet, mais la plupart des sites sont livrés en 2 à 4 semaines."
        },
        {
            question: "Offrez-vous un support après la création du site ?",
            answer: "Oui, nous offrons des services de maintenance et de support pour nous assurer que votre site fonctionne correctement après le lancement."
        },
        {
            question: "Puis-je mettre à jour le contenu de mon site web moi-même ?",
            answer: "Oui, nous créons des sites avec des systèmes de gestion de contenu (CMS) faciles à utiliser, vous permettant de gérer et de mettre à jour votre contenu sans compétences techniques."
        }
    ];

    return (
        <div className="faq-container">
            <h3>Questions Fréquemment Posées</h3>
            {faqData.map((item, index) => (
                <div className="question-item" key={index}>
                    <h4 onClick={() => toggleAnswer(index)}>
                        {item.question}
                    </h4>
                    <div className={`answer ${activeIndex === index ? 'show' : ''}`}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Questions;
