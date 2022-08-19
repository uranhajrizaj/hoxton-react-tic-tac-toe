import { useState } from 'react'
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
  const[winner, setWinner] = useState("")
  function clickCell (rowIndex: number, cellIndex: number) {
    const boardCopy = structuredClone(board)
    boardCopy[rowIndex][cellIndex].value = playerX ?"X":"O"
    setBoard(boardCopy)
  }

   function checkWinner () {
     const boardCopy = structuredClone(board)
     const winner = checkRows(boardCopy) || checkColumns(boardCopy) || checkDiagonals(boardCopy)
     setWinner(winner) 
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
     setWinner("")
   }
   
   return (
    <div className="App">
       <div className='board'>
         {board.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
              return <div className='cell' onClick={()=>{
                setPlayerX(!playerX)
                clickCell (rowIndex, cellIndex)
                checkWinner ()
              }}>{cell.value}</div>
            })
         }
          )}
        
      </div>
      {winner && <div className='winner'><h1>Player {winner} win the game</h1> <button onClick={newGame}>Play Again</button></div>}

    </div>
  )
}

export default App
