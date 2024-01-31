import React,{useContext} from 'react'
import {myContext} from  './Parent'
export default function Child2() {
  const storedVlaue=useContext(myContext)
  return (
    <div>
      <h1>{storedVlaue}</h1>
    </div>
  )
}
