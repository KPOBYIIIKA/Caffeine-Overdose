import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return (
        <header className={styles}>
            <FontAwesomeIcon icon='mug-hot' className={styles.fa}></FontAwesomeIcon>
            <h1>Caffeine Overdose</h1>
            <nav>

            </nav>
        </header>
    );
}

export default Header