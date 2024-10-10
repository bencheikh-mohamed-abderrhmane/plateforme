import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Importer Firestore
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importer Storage

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKv-4TY0l75cqIeOIDLjqkn5FmwoOqoU0",
  authDomain: "web-agency-4290f.firebaseapp.com",
  projectId: "web-agency-4290f",
  storageBucket: "web-agency-4290f.appspot.com",
  messagingSenderId: "997373495935",
  appId: "1:997373495935:web:1ca7300f02b2780ce28d4a",
  measurementId: "G-L69WC6DMJ8"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firebase Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialiser Firestore
const db = getFirestore(app);

// Initialiser Firebase Storage
const storage = getStorage(app);

// Fonction pour sauvegarder un projet dans Firestore
const saveProjectToFirestore = async (projectData, image) => {
  try {
    // Téléchargement de l'image dans Firebase Storage
    const imageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(imageRef, image);

    // Obtenir l'URL publique de l'image
    const imageUrl = await getDownloadURL(imageRef);

    // Ajouter les données du projet à Firestore dans la collection "projects"
    const docRef = await addDoc(collection(db, "projects"), {
      ...projectData,
      imageUrl,  // Enregistrer l'URL de l'image
      createdAt: new Date()  // Ajouter un champ de date
    });

    console.log("Projet enregistré avec succès avec l'ID : ", docRef.id);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du projet : ", error);
  }
};

// Exports
export { auth, googleProvider, db, storage, saveProjectToFirestore };
