import { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import Button from "../button/Button";
import Timer from "../timer/Timer";

function Main(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(props.time);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime <= 0 ? 0 : prevTime - 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <section className={styles}>
      <Timer minutes={minutes} seconds={seconds} />
      <Button
        label={isRunning ? "PAUSE" : "START"}
        onClick={isRunning ? stopTimer : startTimer}
        isRunning={isRunning}
      />
    </section>
  );
}

export default Main;
