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
      </div>

      </div>
    </>
  )
}

export default App
