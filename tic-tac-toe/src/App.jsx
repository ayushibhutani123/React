import React, { useState } from 'react';
import Player from "./component/Player";
import Gameboard from './component/Gameboard';
import Log from './component/Log';
import { WINNING_COMBINATIONS } from './WinningComponent';
import GameOver from './component/GameOver';
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  let winner = null;
  
  const [currentPlayerName, setCurrentPlayerName] = useState('player 1');
  const [currentPlayerName2, setCurrentPlayerName2] = useState('player 2');
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameboard = [...initialGameBoard.map(array=>[...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }
// ...

// ...

for (const combination of WINNING_COMBINATIONS) {
  const firstSquareSymbol = gameboard[combination[0].row][combination[0].column];
const secondSquareSymbol = gameboard[combination[1].row][combination[1].column];
const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column];


  console.log(firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol); // Add this line for debugging

  if (
    firstSquareSymbol !== null &&
    firstSquareSymbol === secondSquareSymbol &&
    firstSquareSymbol === thirdSquareSymbol
  ) {
    winner = firstSquareSymbol;
    break; // Exit the loop once a winner is found
  }
}

console.log("Winner:", winner); // Add this line for debugging

const hasDraw=gameTurns.length===9 && !winner

function handleRestart() {
  console.log('Restarting the game'); // Add this line for debugging
  setGameTurns([]);
}

  function handleselectsquare(rowIndex, colIndex) {
    const currentPlayer = deriveActivePlayer(gameTurns);
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
          <ol id="players" className="highlight-player">
            <Player
              name={currentPlayerName}
              symbol="X"
              getValue={getValue}
              isActive={activePlayer === 'X'}
            />
            <Player
              name={currentPlayerName2}
              symbol="O"
              getValue={getValue2}
              isActive={activePlayer === 'O'}
            />
          </ol>
          {(winner || hasDraw) && <GameOver   player1Name={currentPlayerName}
              player2Name={currentPlayerName2} winner={winner} OnRestart={handleRestart} />}

          <Gameboard   onSelectSquare={handleselectsquare} board={gameboard} OnRestart={handleRestart} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
