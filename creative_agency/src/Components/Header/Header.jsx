import React from 'react'

function Header() {
  return (
    <>
    
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-black text-white">
        <h1 className="text-xl font-bold">GENZI</h1>

        <div className="flex space-x-6 text-2xl">
          <i className="fas fa-search cursor-pointer hover:text-orange-500 transition"></i>
          <i className="fas fa-user cursor-pointer hover:text-orange-500 transition"></i>
          <i className="fas fa-bars cursor-pointer hover:text-orange-500 transition"></i>
        </div>
      </nav>
    </>
  )
}

export default Header;