import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header({progress}) {
    const progressBarWidth = (progress / 100) * 40;
    return (
        <header className={styles}>
            <div className={styles.progress} style={{ width: `${progressBarWidth}rem` }}></div>
            <div className={styles.title}>
                <FontAwesomeIcon icon='mug-hot' className={styles.fa}></FontAwesomeIcon>
                <h1>Caffeine Overdose</h1>
            </div>
            <nav>
                <ul>
                    <li>
                    <FontAwesomeIcon icon='gear' className={styles.fa}></FontAwesomeIcon>
                        Settings
                    </li>
                    <li>
                    <FontAwesomeIcon icon='user' className={styles.fa}></FontAwesomeIcon>
                        Login
                    </li>
                </ul>
            </nav>
            <div className={styles.progress}></div>
        </header>
    );
}

export default Header