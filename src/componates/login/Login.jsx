import React, { useState } from 'react';
import { auth, googleProvider } from './firebase.js';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Importation nécessaire
import 'react-toastify/dist/ReactToastify.css'; // Importation des styles Toastify
import './login.css';

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState("");
    const [state, setState] = useState("Login");
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const checkboxHandler = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = async () => {
        if (!isChecked) {
            setError("You must agree to the terms and conditions to continue.");
            return;
        }

        setError("");
        try {
            if (state === "Sign Up") {
                await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                toast.success("Inscription réussie !", { position: "top-right" }); // Notification corrigée
                navigate('/');
            } else {
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                toast.success("Connexion réussie !", { position: "top-right" }); // Notification corrigée
                navigate('/');
            }
        } catch (err) {
            setError(err.message);
            toast.error(err.message, { position: "top-right" }); // Notification d'erreur corrigée
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Connexion réussie avec Google !", { position: "top-right" }); // Notification corrigée
            navigate('/');
        } catch (err) {
            setError(err.message);
            toast.error(err.message, { position: "top-right" }); // Notification d'erreur corrigée
        }
    };

    return (
        <div className='loginsignup'>
            <ToastContainer /> {/* Conteneur pour les notifications */}
            <div className='loginsignup-container'>
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" && (
                        <input
                            className='name'
                            name='username'
                            value={formData.username}
                            onChange={changeHandler}
                            type="text"
                            placeholder='Your Name'
                        />
                    )}
                    <input
                        className='email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder='Email Address'
                    />
                    <input
                        className='password'
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Password'
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button onClick={handleSubmit} className="continue-button">
                    {state === "Sign Up" ? "Sign Up" : "Login"}
                </button>
                <button onClick={handleGoogleLogin} className="google-button">Se connecter avec Google</button>
                {state === "Sign Up" ? (
                    <p className='loginsignup-login'>
                        Vous avez déjà un compte ?
                        <span onClick={() => setState("Login")}> Se connecter</span>
                    </p>
                ) : (
                    <p className='loginsignup-login'>
                        Créez un compte ?
                        <span onClick={() => setState("Sign Up")}> Cliquez ici</span>
                    </p>
                )}
                <div className="loginsignup-agree">
                    <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        checked={isChecked}
                        onChange={checkboxHandler}
                    />
                    <p>En continuant, vous acceptez nos termes d'utilisation</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
