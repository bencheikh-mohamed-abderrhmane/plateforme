import React, { useState } from 'react';
import axios from 'axios';
import './hero.css'


function Hero() {
    const [domain, setDomain] = useState('');
    const [availability, setAvailability] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkDomain = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://domain-availability.whoisxmlapi.com/api/v1`, {
                params: {
                    apiKey: 'at_DZ6KUWBbSEJvZP8uG5vv5Xx2lOXj8',
                    domainName: domain
                }
            });
            setAvailability(response.data.DomainInfo.domainAvailability);
        } catch (error) {
            console.error('Erreur lors de la vérification du domaine :', error);
        }
        setLoading(false);
    };

    return (
        <div className='hero'>
           
            <p>Vérifier la disponibilité du nom de domaine</p>
            <input 
                type="text" 
                value={domain} 
                onChange={(e) => setDomain(e.target.value)} 
                placeholder="Entrez votre domaine"
            />
            <button onClick={checkDomain}>Vérifier</button>

            {loading ? <p>Recherche en cours...</p> : (
                availability && (
                    <div className={`result ${availability === 'AVAILABLE' ? 'available' : 'not-available'}`}>
                        {availability === 'AVAILABLE' ? 
                            <>Le domaine "{domain}" est disponible <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 24 24"><path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4z"/></svg></> : 
                            <>Le domaine "{domain}" est indisponible</>
                        }
                    </div>
                )
            )}
        </div>
    );
}

export default Hero;
