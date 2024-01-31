import React,{useState,createContext} from 'react'
import Child1 from './Child1';
import Child2 from './Child2';
export const myContext=React.createContext();
export default function Parent() {
  const[StringValue,setStringValue]=useState('')
  if(StringValue===''){
  setStringValue('hello ')
  }
    return (
    <div>
<myContext.Provider value ={StringValue}>
  
  <Child2 /> 
</myContext.Provider>
      
    </div>
  )
}


