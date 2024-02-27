import React, { useState, useRef, useEffect } from "react";
import ResultsModal from "./ResultsModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer.current);
      setTimeRemaining(targetTime * 1000);
      dialog.current.open();
      setTimerIsActive(false);
    }
  }, [timeRemaining, targetTime]);
function handleReset(){
  setTimeRemaining(targetTime*1000)
}
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
    setTimerIsActive(true);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
    setTimerIsActive(false);
  }

  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
      <ResultsModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
    </>
  );
}
