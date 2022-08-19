import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const[squares, setSquares] = useState([
    {
    id: 11,
    checked: false,
    value: "",
  
   },
   {
    id: 12,
    checked: false,
    value: "",

    
   },
   {
    id: 13,
    checked: false,
    value: "",
   
    
   },
   {
    id: 21,
    checked: false,
    value: "",

   
   
   },
  
   {
    id: 22,
    checked: false,
    value: "",

   
   },
   {
    id: 23,
    checked: false,
    value: "",
  
   },
   {
    id: 31,
    checked: false,
    value: "",
   
   },
   {
    id: 32,
    checked: false,
    value: "",
   },
   {
    id: 33,
    checked: false,
    value: "",
  
   }])

 const [displayX, setDisplayX] = useState(false)

  const [winnerX, setWinnerX] = useState(false)
  const [winnerO, setWinnerO] = useState(false)

  const[numberO, setNumberO] = useState(0)
  const[numberX, setNumberX] = useState(0)


   function update(target){
    let updatesquares= squares.map(square => target.id===square.id ? {...square, checked: true, value: displayX ? "X":"O"} : square)
    setSquares(updatesquares)
    console.log(updatesquares)
    
    



}



  return (
    <div className="App">
       <div className='tabel'>
       <ul>
       {squares.map(square => (
            <>
            <input onClick={()=>
            {update(square)
            setDisplayX(!displayX)
        }}type="checkbox" name="myCheckboxes" id={'square.id'} checked={square.checked}/>
            {square.checked ? <label>{square.value}</label>: null}
          
            </>
        ))}
          {winnerX?<p>You Win</p>:null}
          {/* {winnerO?<p>You Win</p>:null} */}
       </ul>
      
      </div>
    </div>
  )
}

export default App
