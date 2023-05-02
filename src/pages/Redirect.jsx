import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Redirect.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Redirect(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

  return (
    <div className={styles.Redirect}>
      <Link to="/">
        <FontAwesomeIcon icon="mug-hot" className={styles.fa}></FontAwesomeIcon>
      </Link>
      <h1 className={styles.label}>{props.action}</h1>
    </div>
  );
}

export default Redirect;
