import React from 'react'

function Team() {
  return (
    <>
        <div className="bg-black text-white min-h-screen">

      <header className="text-center py-16">
        <h1 className="text-5xl font-bold">TEAM</h1>
        <p className="text-gray-400 mt-2">We're a team of creative professionals</p>
      </header>

      <section className="px-6 pb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-gray-600 h-52 rounded-xl"></div>
        ))}
      </section>
    </div>
    </>
  )
}

export default Team