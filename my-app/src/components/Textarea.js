import React, { useState } from "react";

export default function Textarea(props) {
  const handlecopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text Copied to clipboard","success");
  };
  const handlespace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra spaces removed","success");
  };

  const handleUpclick = () => {
    // console.log("Uppercase was clicked"+text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to Uppercase","success");
  };
  const handleLoclick = () => {
    // console.log("Uppercase was clicked"+text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to Lowercase","success");
  };
  const handleclearclick = () => {
    // console.log("Uppercase was clicked"+text);
    let newtext = "";
    setText(newtext);
    props.showalert("text cleared","success");
  };
  const handleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container" style={{color: 'white'}}
      //   style={{ color: props.mode === "light" ? "black" : "white" 
      // }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            style={{
              backgroundColor:props.color,
              color:props.color==="#ffffff"?"black":"white"
              // color: 'white'
              // backgroundColor: props.mode === "light" ? "white" : "grey",
              // color: props.mode === "dark" ? "white" : "grey",
            }}
            onChange={handleOnchange}
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclearclick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handlespace}>
          Remove extra space
        </button>
      </div>
      <div
        className="container"
        
        // style={{ 
          
        //   color: props.mode === "light" ? "black" : "white" 
        // }}
      >
        <h2>Your Text Summary</h2>
        
        <p>{text.split(" ").length !== 0 ? text.split(" ").length - 1 : 0} words</p>
        
        
        
        
        
        
        <p>{text.length} characters</p>
       
       
       
       
       
        <p>{0.008 * text.split(" ").length} minutes to read</p>
       
       
        <h2>Preview</h2>
        <p>
          {" "}
          {text.length > 0
            ? text
            : "Enter something in textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
