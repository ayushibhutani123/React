import React from 'react';

export default function Printarea(props) {
  return (
    <>
    {props.data.map((element,index)=>
    <div key={index}>
        {element}
    </div>)}
    </>
  );
}

