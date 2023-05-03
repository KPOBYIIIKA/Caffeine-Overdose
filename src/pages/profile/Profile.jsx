import { useState, useEffect } from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import styles from "./Profile.module.scss";
import Placeholder from "./../../assets/images/avatar.png";
import Header from "./../../components/header/Header";
import { storage } from "./../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getDoc } from "firebase/firestore";

function Profile() {
  const [user] = useAuthState(auth);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(
    localStorage.getItem("profileImage") || null
  );

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          if (userData.profileImage) {
            setImageUrl(userData.profileImage);
            localStorage.setItem("profileImage", userData.profileImage);
          }
        }
      }
    };

    fetchProfileImage();
  }, [user]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = ref(storage);
      const fileRef = ref(storageRef, `profileImage/${user.uid}/${file.name}`);
      await uploadBytes(fileRef, file);
      const fileURL = await getDownloadURL(fileRef);
      setImageUrl(fileURL);

      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, { profileImage: fileURL }, { merge: true });
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.Profile}>
        <div className={styles.Img__container}>
          <img src={imageUrl || Placeholder} alt="Avatar"></img>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="fileInput"
        />
        <button onClick={handleUpload}>Upload profile picture</button>
      </div>
    </div>
  );
}

export default Profile;
