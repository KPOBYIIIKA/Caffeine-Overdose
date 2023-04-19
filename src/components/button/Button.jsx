import classes from './Button.module.scss'

function Button(props) {
    return (
        <button className={classes} onClick={props.onClick}>{props.label}</button>
    )
}

export default Button