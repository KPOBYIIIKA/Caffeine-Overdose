import styles from "./Button.module.scss";
import clickSound from "../../assets/sounds/click.wav";

function Button(props) {
  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleClick = () => {
    playSound();
    props.onClick();
  };

  return (
    <button
      className={`${styles.button} ${props.isRunning ? styles.active : ""}`}
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
