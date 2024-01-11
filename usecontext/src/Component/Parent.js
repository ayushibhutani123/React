import React,{useState,createContext} from 'react';
import { useContext } from 'react';
import Child2 from './Child2';
import Child1 from './Child1';
export const myContent=React.createContext();
export default function Parent() {
    const [theme, setTheme] = useState('light');
const toggletheme=()=>{
    setTheme((prevtheme)=>
        (prevtheme==='light'?'dark':'light'));
    
}
  return (
    <>
    <myContent.Provider value={theme}>
        <Child1></Child1>
    </myContent.Provider>
    <button type="button" onClick={toggletheme}>Set Dark Theme</button>
        <p>Current Theme: {theme}</p>
    </>
  );
}
