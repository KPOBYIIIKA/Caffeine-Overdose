import Login from "../components/login/Login";
import styles from "./LoginPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <Link to="/">
        <div className={styles.LoginPageTitle}>
          <FontAwesomeIcon
            icon="mug-hot"
            className={styles.fa}
          ></FontAwesomeIcon>
          <h1>Caffeine Overdose</h1>
        </div>
      </Link>
      <h2>Log In</h2>
      <div className={styles.container}>
        <Login />
      </div>
      <span>Do not have an account?</span>
      <span className={styles.Hyperlink}>Create Account</span>
    </div>
  );
}

export default LoginPage;
