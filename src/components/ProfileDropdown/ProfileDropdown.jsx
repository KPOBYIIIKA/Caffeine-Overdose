import React, { useState } from "react";
import styles from "./ProfileDropdown.module.scss";

function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={styles.ProfileDropdown}>
            <button onClick={toggleDropdown} className={styles.DropdownButton}>
                Profile
            </button>
            {isOpen && (
                <ul className={styles.DropdownList}>
                <li className={styles.DropdownItem}>Menüpunkt 1</li>
                <li className={styles.DropdownItem}>Menüpunkt 2</li>
                <li className={styles.DropdownItem}>Menüpunkt 3</li>
              </ul>
            )}
        </div>
    )
}

export default ProfileDropdown;