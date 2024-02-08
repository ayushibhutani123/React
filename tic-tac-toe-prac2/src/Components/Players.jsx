import React from 'react';
import { useState } from 'react';

export default function Players({id,symbol}) {
    const[isEditing,setisediting]=useState(false)
    const[inputstate,setInputstate]=useState(id)
const Inputfield=(event)=>{
    
     setInputstate(event.target.value);
   
}
const handleedit=()=>{
    setisediting(true);
}
const handlesave=()=>{
    setisediting(false);
}
  return (
    <>
    
    {isEditing?(<>  
        <input onChange={Inputfield} value={inputstate}></input>
<button onClick={handlesave}>Save</button> 
   </>)
      :

(
    <>
 <h5>{inputstate}</h5>
 <h5>{symbol}</h5>
    <button onClick={handleedit}>Edit</button>
</>
)}
   
   
 
   
  
    </>
  );
}
