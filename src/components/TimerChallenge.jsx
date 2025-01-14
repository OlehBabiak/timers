import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    console.log('timerExpired', timerExpired);
    console.log('timerStarted', timerStarted);

    function handleStart() {
        console.log('timer clicked');
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    function handleStop() {
        clearTimeout(timer.current);
        setTimerExpired(false);
        setTimerStarted(false);
    };

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Time's up!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={!timerStarted ? handleStart : handleStop}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running' : 'Timer inactive'}
            </p>
        </section >
    );
}