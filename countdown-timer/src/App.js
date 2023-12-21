import React, { useState, useEffect } from "react";

export default function App() {
  const [counter, setcounter] = useState(0);
  const countdown = (event) => {
    setcounter(event.target.value);
  };
  useEffect(() => {
    if (counter == "") {
      setcounter(0);
    } else {
      const timeout = setTimeout(() => {
        setcounter((prevcounter) => prevcounter - 1);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [counter]);

  return (
    <>
      <div>
        <h2>Countdown timer</h2>
        <h5>Enter a timer:</h5>
        <br></br>
        <input type="number" onChange={countdown} />
        <h4>{counter}</h4>
      </div>
    </>
  );
}
