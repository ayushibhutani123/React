import React, { useState } from 'react';
import Player from "./component/Player";
import Gameboard from './component/Gameboard';

function App() {
  const [currentPlayerName, setCurrentPlayerName] = useState('player 1');
  const [currentPlayerName2, setCurrentPlayerName2] = useState('player 2');

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
          <ol id="players">
            <Player name={currentPlayerName} symbol="X" getValue={getValue}  />
            <Player name={currentPlayerName2} symbol="0" getValue={getValue2} />
          </ol>
          <Gameboard/>
        </div>
        Log
      </main>
    </>
  );
}

export default App;