import { useEffect, useState } from 'react';
import classes from './Main.module.scss'
import Button from '../button/Button'
import Timer from '../timer/Timer'

function Main() {
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(1500)

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime -1)
            }, 1000)
        } else {
            clearInterval(interval);
        }
        
        return () => clearInterval(interval)
    }, [isRunning])

    const startTimer = () => {
        setIsRunning(true)
    }

    const stopTimer = () => {
        setIsRunning(false)
    }

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return(
        <section className={classes}>
            <Timer minutes={minutes} seconds={seconds}/>
            {isRunning ? (
                <Button label="PAUSE" onClick={stopTimer} />
            ) : (
                <Button label="START" onClick={startTimer} />
            )}
        </section>
    )
}

export default Main