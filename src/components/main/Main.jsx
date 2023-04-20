import { useEffect, useState, useRef } from "react";
import styles from "./Main.module.scss";
import Button from "../button/Button";
import Timer from "../timer/Timer";

function Main(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(props.time * 1000);
  const { onProgressChange, time: initialTime } = props;
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    onProgressChange(
      ((initialTime * 1000 - time) / (initialTime * 1000)) * 100
    );
  }, [time, onProgressChange, initialTime]);

  useEffect(() => {
    const tick = () => {
      if (!isRunning) return;

      const currentTime = performance.now();
      const elapsedTime = currentTime - startTimeRef.current;
      startTimeRef.current = currentTime;

      setTime((prevTime) => {
        const newTime = prevTime - elapsedTime;
        return newTime <= 0 ? 0 : newTime;
      });

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    if (isRunning) {
      startTimeRef.current = performance.now();
      animationFrameRef.current = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(animationFrameRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

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
