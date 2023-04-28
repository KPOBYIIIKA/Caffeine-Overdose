import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.scss'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/redirect');

      } catch (error) {
        console.error(error.message);
        alert("Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldedaten.");
      }
    };


    return(
        <div className={styles.Login}>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type='password' value={password}
          onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login