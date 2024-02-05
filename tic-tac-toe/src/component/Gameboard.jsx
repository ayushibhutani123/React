import React from 'react';

export default function Gameboard({onSelectSquare}) {
    const initialGameBoard=[
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ];
    const[gameboard,setgameboard]=useState(initialGameBoard);
    function handleSelectSquare (rowindex,colindex){
        setgameboard((prevGameBoard)=>{
            const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])]
            updatedBoard[rowindex][colindex]=activePlayerSymbol;
            return updatedBoard;

        });
        onSelectSquare();
    }
       
  return (
    <>
    <ol id="game-board">
        {gameboard.map((row,rowindex)=><li key={rowindex}>
            <ol>
                {row.map((symbol,colindex)=>
                <li key={colindex}><button onClick={()=>handleSelectSquare(rowindex,colindex)}>{symbol}</button></li>)}
            </ol>
        </li>)}

    </ol>
    </>
  );
}
