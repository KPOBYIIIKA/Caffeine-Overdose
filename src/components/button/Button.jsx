import styles from './Button.module.scss'

function Button(props) {
    return (
        <button className={`${styles.button} ${props.isRunning ? styles.active : ''}`} onClick={props.onClick}>{props.label}</button>
    )
}

export default Button