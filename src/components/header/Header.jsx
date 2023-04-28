import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";


function Header({ progress }) {
  const { currentUser } = useAuth();
  const progressBarWidth = (progress / 100) * 40;
  return (
    <header className={styles}>
      <div
        className={styles.progress}
        style={{ width: `${progressBarWidth}rem` }}
      ></div>
      <Link to="/">
        <div className={styles.title}>
          <FontAwesomeIcon
            icon="mug-hot"
            className={styles.fa}
          ></FontAwesomeIcon>
          <h1>Caffeine Overdose</h1>
        </div>
      </Link>
      <nav>
        <ul>
          {/*<li>
            <FontAwesomeIcon
              icon="gear"
              className={styles.fa}
            ></FontAwesomeIcon>
            <span>Settings</span>
            </li>*/}
          <li>
            {currentUser ? (
              <Link to="/profile">Profile</Link>
            ) : (
              <Link to="/login">
              <FontAwesomeIcon
                icon="user"
                className={styles.fa}
              ></FontAwesomeIcon>
              <span>Login</span>
            </Link>
            )}
          </li>
        </ul>
      </nav>
      <div className={styles.progress}></div>
    </header>
  );
}

export default Header;
