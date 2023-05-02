import React, { useState, useEffect } from "react";
import styles from "./ProfileDropdown.module.scss";
import Placeholder from "./../../assets/images/avatar.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/redirect', { state: { action: "Signed Out" } });
      })
      .catch((error) => {
        console.error(error.message);
        alert("Sign in failed. Please check your login credentials.");
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.ProfileDropdown}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.ProfileDropdown}>
      <img
        src={Placeholder}
        onClick={toggleDropdown}
        className={styles.DropdownButton}
        alt="Avatar"
      />
      {isOpen && (
        <ul className={styles.DropdownList}>
          <li className={styles.DropdownItem}>Profile</li>
          <span></span>
          <li className={styles.DropdownItem} onClick={handleLogout}>
            Logout
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileDropdown;
