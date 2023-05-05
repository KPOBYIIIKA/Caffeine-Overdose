import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, getFirestore, query, where, collection, getDocs } from "firebase/firestore";
import styles from "./Signup.module.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordRepeat) {
      alert("Password does not match!");
      return;
    }

    const checkUsername = async () => {
      const db = getFirestore();
      const usersRef = collection(db, "users");
      const usernameQuery = query(usersRef, where("username", "==", username.toLowerCase()));
      const querySnapshot = await getDocs(usernameQuery);
      return querySnapshot.empty;
    };

    const isUsernameAvailable = await checkUsername();
    if (!isUsernameAvailable) {
      alert("Username is already taken!");
      return;
    }

    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { username: username.toLowerCase() });
      navigate("/redirect", { state: { action: "Signed Up" } });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles.Signup}>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Repeat Password</label>
        <input
          type="password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
