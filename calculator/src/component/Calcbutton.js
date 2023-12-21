import React, { useState } from 'react';

export default function Calcbutton(props) {
  const [input, setinput] = useState("");

  const handleOnClick = () => {
    setinput((prevInput) => prevInput + props.value);
   
    if(props.value==="A/c"){
      props.printdata();
    }
    else if(props.value==="+/-"){
      props.printdata1();

    }
    else{
      props.getdata(props.value);
    }
  };

  console.log(input);

  return (
    <>
      <div>
        <button onClick={handleOnClick}
          className={props.value === '0' ? props.zerowaliclass : ''}>
          {props.value}
        </button>
      </div>
    </>
  );
}
