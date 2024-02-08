import React, { useState } from "react";
import "./Gameboard.css"; 

export default function Gameboard({ getPlayer }) {
  const [activePlayer, setActivePlayer] = useState("X");
  const [initialGameBoard, setInitialGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const handleClick = (rowIndex, colIndex) => {
    if (!initialGameBoard[rowIndex][colIndex]) {
      const updatedGameBoard = [...initialGameBoard];
      updatedGameBoard[rowIndex][colIndex] = activePlayer;
      setInitialGameBoard(updatedGameBoard);
      setActivePlayer(activePlayer === "X" ? "O" : "X");
      getPlayer(activePlayer);
    }
  };

  return (
    <>
      <ol className="gameboard">
        {initialGameBoard.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((symbol, colIndex) => (
              <li key={`${rowIndex}${colIndex}`}>
                <button onClick={() => handleClick(rowIndex, colIndex)} className="cell" id={`cell-${rowIndex}-${colIndex}`}>
                  {symbol ? symbol : ""}
                </button>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ol>
    </>
  );
}
