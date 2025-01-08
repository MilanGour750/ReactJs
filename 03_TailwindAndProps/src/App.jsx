import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name:'Milan Gour',
    age: 21
  }

  let myArr = [1,2,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card  username = 'Milanzzz Plays' info={myObj} newArr = {myArr}/>
      <Card  username = 'JokerKiHaveli' btnTxt = 'Click Me!'/>
      
    </>
  )
}

export default App
