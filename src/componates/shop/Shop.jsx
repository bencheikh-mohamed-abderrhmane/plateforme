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
            <h1 className='name-affiche'>Nos Meilleurs Service</h1>
            <Affiche />
            <About />
            <Partenaires />
            <Questions />
            <h1 className='name-affiche'>Contactez nous</h1>
            <Contact />
            <h4 className='copy'>Copyright © 2024 SPACE SORTIUM </h4>
        </div>
    );
}

export default Shop;