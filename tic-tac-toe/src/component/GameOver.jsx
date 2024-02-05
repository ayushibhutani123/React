import React from 'react';

export default function GameOver({ winner, player1Name, player2Name, OnRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner === 'X' ? player1Name : player2Name} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={OnRestart}>Rematch!</button>
      </p>
    </div>
  );
}
