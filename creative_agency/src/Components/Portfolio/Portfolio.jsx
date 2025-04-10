import React from 'react'

function Portfolio() {
  return (

    <div className="bg-black min-h-screen text-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">PORTFOLIO</h1>
        <p className="text-gray-400">Visual storytelling that elevates your brand</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-300 aspect-video rounded-lg"></div>
        <div className="bg-gray-300 aspect-video rounded-lg"></div>
        <div className="col-span-2 bg-gray-300 aspect-[4/2] rounded-lg"></div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-300 aspect-square rounded-lg"></div>
        <div className="bg-gray-300 aspect-square rounded-lg"></div>
        <div className="bg-gray-300 aspect-square rounded-lg"></div>
      </div>
    </div>
  )
}

export default Portfolio