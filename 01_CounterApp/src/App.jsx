import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  let error = document.getElementById('decreased');

  const AddValue = () => {
    setCounter(counter + 1)
  }

  const DecreaseValue = () => {
    if(counter>0){
      setCounter(counter - 1)

    }
    else{
      const errors = document.createTextNode("The value is at zero already");
      error.appendChild(errors);

    }
    
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-4">Milanzzz Plays</h1>
      <h2 className="text-2xl">Counter Value: {counter}</h2>
      <div className="space-x-4">
      <button className="btn btn-primary" onClick={AddValue}>Increase</button>
      <button className="btn btn-primary" onClick={DecreaseValue}>Decrease</button>
      <p id='decreased'></p>
      </div>
    </>
  )
}

export default App
