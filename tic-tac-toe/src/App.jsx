import React, { useState } from 'react';
import Player from "./component/Player";
import Gameboard from './component/Gameboard';
import Log from './component/Log';

function App() {
  const [currentPlayerName, setCurrentPlayerName] = useState('player 1');
  const [currentPlayerName2, setCurrentPlayerName2] = useState('player 2');
  const[activePlayer,setActivePlayer]=useState("X")
  function handleselectsquare(){
    setActivePlayer((curActivePlayer)=>curActivePlayer=='X'?'0':'X');
  }

  const getValue = (value) => {
    setCurrentPlayerName(value);
  };

  const getValue2 = (value) => {
    setCurrentPlayerName2(value);
  };

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player'>
            <Player name={currentPlayerName} symbol="X" getValue={getValue} isActive={activePlayer==="X"} />
            <Player name={currentPlayerName2} symbol="0" getValue={getValue2} isActive={activePlayer==="0"}/>
          </ol>
          <Gameboard onSelectSquare={handleselectsquare} activePlayerSymbol={activePlayer}/>
        </div>
        <Log/>
      </main>
    </>
  );
}

export default App;