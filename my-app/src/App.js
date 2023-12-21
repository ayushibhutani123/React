import "./App.css";
import Alert from "./components/Alert";
// import About from './components/About';
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import React, { useState } from "react";
function App() {
  const [mode, setmode] = useState("light");
  const [alert,setalert] = useState(null);
  const showalert=((message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  })
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor='#042542';
      showalert("Dark mode has been enabled","success");
   
    }
  };
  const [color, setcolor] = useState();
  const handlecolor=(event)=>{
   setcolor(event.target.value);

  }
  document.body.style.backgroundColor =color;
  console.log(color)
 
  return (
    <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode} color={color} />
      <Alert alert={alert}/>
      <div className="container my-3" style={{backgroundColor:color}}>
        <Textarea showalert={showalert} heading="Enter the text to analyze below" color={color} mode={mode} />
        {/* <About/> */}
      </div>
      <div>
      <label htmlFor="favcolor">Select your favorite color:</label>
<input type="color" id="favcolor" onChange={handlecolor} color={color} value="#ff0000"></input>
      </div>
    </>
  );
}

export default App;
