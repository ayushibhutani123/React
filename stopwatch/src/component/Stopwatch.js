import React, { useEffect, useState } from "react";
import './Stopwatch.css';

export default function Stopwatch() {
  const [secondstartstate, setSecondState] = useState(0);
  const [Minutestate, setMinuteState] = useState(0);
  const [hourstate, sethourstate] = useState(0);
  const [isRunning, setisRunning] = useState(false);


  useEffect(() => {
    let interval;
  
    if (isRunning) {
      interval = setInterval(() => {
        setSecondState((prevSecondState) => {
          if (prevSecondState < 59) {
            return prevSecondState + 1;
          } else {
            setSecondState(0);
            setMinuteState((prevMinutestate)=>{
              if(prevMinutestate<59){
              return  prevMinutestate+1;
              }
              else{
                setMinuteState(0);
                sethourstate((prevhourstate)=>{
                 return prevhourstate+1;
                
                })
              }
             

            })
          }
            
        });
      }, 1000); 
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);
 
useEffect(() => {
  console.log("Hour State:", hourstate);
}, [hourstate]);
  
  
  
  
  
  
  

//   useEffect(() => {
//     let minuteInterval;

//     if (isRunning) {
//       minuteInterval = setInterval(() => {
//         setminutestate((prevSetState) => prevSetState + 1);
//       }, 60000);
//     }

//     return () => {
//       clearInterval(minuteInterval);
//     };
//   }, [isRunning,setminutestate]);

//   useEffect(() => {
//     let hourInterval;

//     if (isRunning) {
//       hourInterval = setInterval(() => {
//         sethourstate((prevSetState) => prevSetState + 1);
//       }, 3600000);
//     }

//     return () => {
//       clearInterval(hourInterval);
//     };
//   }, [isRunning,sethourstate]);

  function startHandler(){
    setisRunning(true);
  };

  const stopHandler = () => {
    setisRunning(false);
  };

  const resetHandler = () => {
    setisRunning(false);
    setSecondState(0);
    setMinuteState(0);
    sethourstate(0);
  };

  return (
    <div>
      <div className="container">
        <p>
          <span>
            {hourstate < 10 ? "0" + hourstate : hourstate}
            </span>
          <b>:</b>
          <span>
            {Minutestate < 10? "0"+ Minutestate: Minutestate}
            </span>
          <b>:</b>
          <span>{secondstartstate  < 10? "0"+ secondstartstate: secondstartstate}</span>
        </p>
      </div>
      <div className="buttons-container">
        <button className="start" onClick={startHandler}>
          Start
        </button>
        <button className="stop" onClick={stopHandler}>
          Stop
        </button>
        <button className="restart" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
}
