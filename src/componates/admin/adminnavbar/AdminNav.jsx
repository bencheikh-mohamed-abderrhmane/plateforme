import React, { useState } from 'react';
import UserManagement from '../UserManagement';
import Commande from '../commande/Commande';
import './adminnav.css'; // Assurez-vous que le fichier CSS est bien importé
import AdminContact from '../adminContact/AdminContact';

function AdminNav(props) {
    const [activeComponent, setActiveComponent] = useState('users');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'users':
                return <UserManagement />;
            case 'commandes':
                return <Commande />;
            default:
                return <UserManagement />;
                case 'contact':
                    return <AdminContact />
        }
    };

    return (
        <div>
            <nav>
                <button 
                    onClick={() => setActiveComponent('users')} 
                    className={activeComponent === 'users' ? 'active' : ''}
                >
                    Gestion des Utilisateurs
                </button>
                <button 
                    onClick={() => setActiveComponent('commandes')} 
                    className={activeComponent === 'commandes' ? 'active' : ''}
                >
                    Gestion des Commandes
                </button>

                <button 
                    onClick={() => setActiveComponent('contact')} 
                    className={activeComponent === 'contact' ? 'active' : ''}
                >
                    Gestion des Contact
                </button>
            </nav>
            <div className="admin-content">
                {renderComponent()}
            </div>
        </div>
    );
}

export default AdminNav;
