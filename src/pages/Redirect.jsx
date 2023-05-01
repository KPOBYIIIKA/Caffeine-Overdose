import styles from "./Redirect.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Redirect(props) {
    return(
        <div className={styles.Redirect}>
            <Link to="/"><FontAwesomeIcon
            icon="mug-hot"
            className={styles.fa}
          ></FontAwesomeIcon>
          </Link>
          <h1 className={styles.label}>{props.label}</h1>
        </div>
    )
}

export default Redirect;