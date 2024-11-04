import './App.css';
import Login from './componates/login/Login';
import Navbar from './componates/navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './componates/shop/Shop';
import Service from './Service';
import Work from './componates/work/Work';
import ProjectForm from './componates/offers/ProjectForm';
import Merci from './componates/merci/Merci';
import AdminNav from './componates/admin/adminnavbar/AdminNav';
import { useEffect, useState } from 'react';
import { auth, db } from './componates/login/firebase'; // Assurez-vous d'importer auth et db
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Observer l'état de l'utilisateur
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Récupérer les informations de l'utilisateur dans Firestore
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          // Vérifiez si l'utilisateur a le rôle d'administrateur
          setIsAdmin(userData.role === 'admin');
        }
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Nettoie l'observateur
  }, []);

  if (loading) {
    return <p>Chargement...</p>; // Affichage pendant le chargement
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/service' element={<Service />} />
          <Route path='/portfolio' element={<Work />} />
          <Route path='/projectform' element={<ProjectForm />} />
          <Route path='/merci' element={<Merci />} />
          <Route path='/login' element={<Login />} />
          
          {/* Route protégée pour l'admin */}
          <Route 
            path='/admin' 
            element={isAdmin ? <AdminNav /> : <Navigate to="/login" />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
