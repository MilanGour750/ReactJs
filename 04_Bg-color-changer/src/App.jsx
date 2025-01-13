import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const[color, setcolor] = useState("#212121")
  return (
    <div className='w-full h-screen' style = {{backgroundColor: color}}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-white text-black shadow-xl gap-3 px-3 py-3 rounded-2xl'>
          <button onClick={function(){setcolor("red")}} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => {setcolor('green')}} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => {setcolor('blue')}}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => {setcolor('yellow')}}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => {setcolor('olive')}}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => {setcolor('pink')}}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => {setcolor('lavender')}}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => {setcolor('white')}}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => {setcolor('gold')}}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "gold"}}>Gold</button>
        </div>
      </div>
    </div>
  )
}

export default App
