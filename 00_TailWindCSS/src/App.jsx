import { useState } from 'react'


function App() {
  

  return (
    <>
    <div className='grid place-content-center h-screen bg-slate-500'>
      <h1 className=' text-white text-4xl m-6'>TEST</h1>

      <div className=''>
        <div className='p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-lg flex items-center space-x-4'>
          <div >
            <img className='h-12 w-12 rounded-full' src="https://picsum.photos/200" alt="Not Available" />
          </div>
          <div>
            <div className='text-2xl font-medium'>
              Tailwind CSS
              <p className='bg-slate-300 text-base'>By Milan Gour</p>
            </div>
          </div>
        </div>
          <button className=' flex flex-wrap items-center text-center text-base px-3 mt-2 bg-blue-400 text-black rounded-sm mx-auto hover:bg-lime-300 cursor-pointer'>Click!</button>
      </div>
      <div className='text-center my-4 text-gray-950'>
        <p className='text-white md:text-amber-500 sm:text-green-500 '>This is a test paragraph.</p>
      </div>
      </div>

      
    </>
  )
}

export default App
