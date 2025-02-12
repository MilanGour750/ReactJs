import { useState } from 'react'


function App() {
  

  return (
    <>
        {/* navbar Starts here */}
        <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4'>
          <div className='text-2xl font-bold text-indigo-800'>Milan Tent House</div>
            <ul className='md:flex hidden'>
              <li className='mx-[10px] cursor-pointer'>Home</li>
              <li className='mx-[10px] cursor-pointer'>Career</li>
              <li className='mx-[10px] cursor-pointer'>About Us</li>
            </ul>

            
          <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded cursor-pointer font-bold'>
            Login/SignUp
          </div>
          <div className='md:hidden '>
            <a className='text-4xl ' href="#">&#8801;</a>
          </div>
        </nav>
        {/* navbar ends here */}


        {/* image section starts here */}
        <header className='w-full h-auto '>
          <img className='w-full hidden md:block' src="https://picsum.photos/200/300?grayscale" alt="" />
          <img className='w-full md:hidden' src="https://picsum.photos/id/870/200/300?grayscale&blur=2" alt="" />
        </header>
        {/* image section ends here */}

        {/* student section starts here */}
        <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 bg-indigo-800'>
          <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
            <p>"Pure Hard Word, No Smart Work"</p>
            <div>test</div>
          </div>
          <div></div>
        </div>


    </>
  )
}

export default App
