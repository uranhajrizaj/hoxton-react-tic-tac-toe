import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const[board, setBoard] = useState([
    [
      {  value: "" },
      { value: '' },
      { value: '' }

    ],
    [ { value: "" },
      { value: '' },
      {value: '' }],
    [ {  value: "" },
      {  value: '' },
      {  value: '' }]
  ])
  const[playerX, setPlayerX] = useState(true)

  function clickCell (rowIndex: number, cellIndex: number) {
    const boardCopy = structuredClone(board)
    boardCopy[rowIndex][cellIndex].value = playerX ?"X":"O"
    setBoard(boardCopy)
  }
  
   useEffect(() => {
    checkWinner();
  }, [board, checkWinner]);

   function checkWinner () {
     const winner = checkRows(board) || checkColumns(board) || checkDiagonals(board)
     return winner

   }
    function checkRows (board: any[][]) {
      for (let row of board) {
        if (row.every(cell => cell.value === "X")) {
          return "X"
        } else if (row.every(cell => cell.value === "O")) {
          return "O"
        }
      }
      return null
    }
    function checkColumns (board: any[][]) {
      for (let i = 0; i < board.length; i++) {
        const column = board.map(row => row[i])
        if (column.every(cell => cell.value === "X")) {
          return "X"
        } else if (column.every(cell => cell.value === "O")) {
          return "O"
        }
      }
      return null
    }
    function checkDiagonals (board: any[][]) {
      const diagonal1 = board.map((row, index) => row[index])
      const diagonal2 = board.map((row, index) => row[row.length - 1 - index])
      if (diagonal1.every(cell => cell.value === "X")) {
        return "X"
      } else if (diagonal1.every(cell => cell.value === "O")) {
        return "O"
      } else if (diagonal2.every(cell => cell.value === "X")) {
        return "X"
      } else if (diagonal2.every(cell => cell.value === "O")) {
        return "O"
      }
      return null
    }
    
   function newGame() {
     setBoard([
       [{ value: "" }, { value: "" }, { value: "" }],
       [{ value: "" }, { value: "" }, { value: "" }],
       [{ value: "" }, { value: "" }, { value: "" }]
     ])
     setPlayerX(true)
   }
   
   return (
    <div className="App">
       <div className='board'>
         {board.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
              return <div className='cell' onClick={(e)=>{
                setPlayerX(!playerX)
                clickCell (rowIndex, cellIndex)
              }}>{cell.value}</div>
            })
         }
          )}
        
      </div>
      {checkWinner() ?  <div className='winner'><h1>Player {checkWinner()} win the game</h1> <button onClick={newGame}>Play Again</button></div> :null}

    </div>
  )
}

export default App
