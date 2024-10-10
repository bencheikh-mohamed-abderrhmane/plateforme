
import React from 'react';
import './partenaires.css'
import adex from '../assets/images__1_-removebg-preview.png'

function Partenaires() {
    return (
        <div className="partenaires-container">
            <h3>Nos Partenaires Technologiques</h3>
            <div className="logos">
            <img src={adex} alt="" />
            </div>
        </div>
    );
}

export default Partenaires;
