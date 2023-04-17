import classes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <header className={classes}>
            <FontAwesomeIcon icon='coffee' className={classes.fa}></FontAwesomeIcon>
            <h1>Caffeine Overdose</h1>
            <nav>

            </nav>
        </header>
    );
}

export default Header;