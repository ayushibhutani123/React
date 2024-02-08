import React, { useState } from 'react';
import Players from './Components/Players';
import Gameboard from './Components/Gameboard';
export default function App() {
  const[playerVal,setPlayerVal]=useState("")
  const getPlayer=(symbol)=>{
   setPlayerVal(symbol)
  }
  console.log(playerVal)
  return (
    <>
    <h1>Tic-tac-toe</h1>
    <div>
      <Players id="Player1" symbol="X"/>
      <Players id="Player2" symbol="O"/>
    </div>
    <div>
     <Gameboard getPlayer={getPlayer} symbol={playerVal} />
    </div>
    <div>
      //log
    </div>
    </>
  );
}
