import React from 'react';
import './shop.css'
import Hero from '../hero/Hero';
import banner from '../assets/presantaion.webp'
import Affiche from '../affiche/Affiche';
import About from '../about/About';
import Partenaires from '../partenaires/Partenaires';
import Questions from '../questions/Questions';
import Contact from '../contact/Contact';
function Shop(props) {
    return (
        <div>
             <img className='banner' src={banner} alt="" />
            <Hero />
            <Affiche />
            <About />
            <Partenaires />
            <Questions />
            <Contact />
            <h4 className='copy'>Copyright © 2024 SPACE SORTIUM | Site web développé par Bencheikh Mohamed Abderrahmane</h4>
        </div>
    );
}

export default Shop;