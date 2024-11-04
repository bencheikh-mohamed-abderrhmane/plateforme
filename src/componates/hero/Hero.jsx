import React, { useState } from 'react';
import axios from 'axios';
import './hero.css'

function Hero() {
    const [domain, setDomain] = useState('');
    const [isAvailable, setIsAvailable] = useState(null);
    const [loading, setLoading] = useState(false);
    const apiKey = 'at_vTiyixFFh3eXIEDAsmv3eBRtSF0Ph'; // Ta clé API

    const checkDomainAvailability = () => {
        if (!domain) {
            alert('Veuillez entrer un nom de domaine.');
            return;
        }

        setLoading(true);
        axios.get(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${domain}&outputFormat=json`)
            .then(response => {
                setLoading(false);
                const whoisRecord = response.data.WhoisRecord;
                if (whoisRecord && whoisRecord.dataError) {
                    setIsAvailable(true); // Le domaine est disponible
                } else {
                    setIsAvailable(false); // Le domaine n'est pas disponible
                }
            })
            .catch(error => {
                setLoading(false);
                console.error('Erreur lors de la vérification du domaine:', error);
            });
    };

    return (
        <div className='hero'>
            <h1>Vérifier la disponibilité d'un nom de domaine</h1>
            <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Entrer un nom de domaine"
            />
            <button onClick={checkDomainAvailability}>
                {loading ? 'Vérification...' : 'Vérifier la disponibilité'}
            </button>

            {isAvailable !== null && (
                <div>
                    {isAvailable ? (
                        <p>Le domaine <strong>{domain}</strong> est disponible ! 🎉</p>
                    ) : (
                        <p>Le domaine <strong>{domain}</strong> n'est pas disponible. 😢</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Hero;
