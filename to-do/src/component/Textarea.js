import React,{useState} from 'react';
import Printarea from './Printarea';

export default function Textarea() {
    const [state, setstate] = useState("");
    const savedData = localStorage.getItem('myData');
const initialArray = savedData ? JSON.parse(savedData) : [];
const [arr, setarr] = useState(initialArray);

    
    const clickhandeler=(event)=>{
setstate(event.target.value);
console.log(state);

    }
    const ayushikafunction = () => {
      // Create a copy of the existing array and add the new value
      const newArray = [...arr, state];
    
      // Update the state with the new array
      setarr(newArray);
    
      // Convert the array to a string and save it in local storage
      localStorage.setItem('myData', JSON.stringify(newArray));
    };
    
    console.log(arr);
   
  
  return (
    <>
    <div>
       <label htmlFor="fname">TO DO LIST:</label><br></br>
  <input type="text" id="fname" name="fname" onChange={clickhandeler}></input>
  <button onClick={ayushikafunction}>ADD</button>
    </div>
    <div>
        <h2>TO DO LIST</h2>
        
    </div>
    <Printarea data={arr}/>
    </>
  );
}
