import Signup from "../components/signup/Signup";
import styles from "./SignupPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className={styles.SignupPage}>
      <Link to="/">
        <div className={styles.SignupPageTitle}>
          <FontAwesomeIcon
            icon="mug-hot"
            className={styles.fa}
          ></FontAwesomeIcon>
          <h1>Caffeine Overdose</h1>
        </div>
      </Link>
      <h2>Sign Up</h2>
      <div className={styles.container}>
        <Signup />
      </div>
      <span>Already have an account?</span>
      <Link to="/login">
        <span className={styles.Hyperlink}>Log In</span>
      </Link>
    </div>
  );
}

export default SignupPage;
