import { useState, useEffect } from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import styles from "./Profile.module.scss";
import Placeholder from "./../../assets/images/avatar.png";
import { storage } from "./../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getDoc } from "firebase/firestore";

function Profile() {
  const [user] = useAuthState(auth);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState(
    localStorage.getItem("profileImage") || null
  );
  const [isUploading, setIsUploading] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
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
          if (userData.username) {
            setUsername(userData.username);
          }
        }
      }
    };

    fetchProfileData();
  }, [user]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleUpload = async () => {
    if (file) {
      setIsUploading(true);
      const storageRef = ref(storage);
      const fileRef = ref(storageRef, `profileImage/${user.uid}/${file.name}`);
      await uploadBytes(fileRef, file).then(async () => {
        const fileURL = await getDownloadURL(fileRef);
        setImageUrl(fileURL);

        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, { profileImage: fileURL }, { merge: true });
        setFileName("");
        setIsUploading(false);
      });
    }
  };

  return (
    <div>
      <div className={styles.Profile}>
        <div className={styles.Img__container}>
          <img src={imageUrl || Placeholder} alt="Avatar"></img>
        </div>
        <div className={styles.Button__container}>
          <label>
            {fileName || "Search File..."}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="fileInput"
            />
          </label>
          <button
            onClick={handleUpload}
            className={isUploading ? styles.uploaded : ""}
          >
            {isUploading ? "Uploaded" : "Upload"}
          </button>
        </div>
        <h1>{username}</h1>
      </div>
    </div>
  );
}

export default Profile;
