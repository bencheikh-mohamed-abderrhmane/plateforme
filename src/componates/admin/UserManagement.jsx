import React, { useEffect, useState } from 'react';
import { db } from '../login/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import './usermanagement.css'

function UserManagement() {
    const [users, setUsers] = useState([]);

    // Fonction pour récupérer la liste des utilisateurs
    const fetchUsers = async () => {
        try {
            const usersCollection = collection(db, 'users');
            const userSnapshot = await getDocs(usersCollection);
            const userList = userSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(userList);
        } catch (error) {
            console.error("Erreur lors de la récupération des utilisateurs :", error);
        }
    };

    // Fonction pour promouvoir un utilisateur en tant qu'admin
    const promoteToAdmin = async (userId) => {
        try {
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, { role: 'admin' });
            setUsers(users.map(user => 
                user.id === userId ? { ...user, role: 'admin' } : user
            ));
            console.log("Utilisateur promu en tant qu'admin");
        } catch (error) {
            console.error("Erreur lors de la promotion de l'utilisateur :", error);
        }
    };

    // Fonction pour rétrograder un utilisateur d'admin à utilisateur
    const demoteFromAdmin = async (userId) => {
        try {
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, { role: 'user' });
            setUsers(users.map(user => 
                user.id === userId ? { ...user, role: 'user' } : user
            ));
            console.log("Utilisateur rétrogradé de l'admin");
        } catch (error) {
            console.error("Erreur lors de la rétrogradation de l'utilisateur :", error);
        }
    };

    // Charger les utilisateurs au montage du composant
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-management">
            <h2>Gestion des Utilisateurs</h2>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id}>
                        <p>Email: {user.email}</p>
                        <p>Nom: {user.username}</p>
                        <p className="user-role">Rôle: {user.role}</p>
                        {user.role !== 'admin' ? (
                            <button 
                                onClick={() => promoteToAdmin(user.id)} 
                                className="promote-button"
                            >
                                Promouvoir en tant qu'admin
                            </button>
                        ) : (
                            <button 
                                onClick={() => demoteFromAdmin(user.id)} 
                                className="demote-button"
                            >
                                Rétrograder d'admin
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserManagement;
