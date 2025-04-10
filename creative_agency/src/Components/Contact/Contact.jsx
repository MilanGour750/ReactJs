import React from 'react'

function Contact() {
  return (
    <div className="bg-black min-h-screen text-white p-8">

      <div className="text-center mb-8">
        <h1 className="text-6xl font-extrabold">CONTACT</h1>
        <p className="text-gray-400">Our team is here to answer your questions</p>
      </div>
      <div className="bg-gray-300 w-full h-[400px] rounded-lg mb-8"></div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black border-b border-gray-400 text-white p-2 mb-4 outline-none"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="w-full bg-black border-b border-gray-400 text-white p-2 mb-4 outline-none"
          />
          <input
            type="text"
            placeholder="Your Email Address"
            className="w-full bg-black border-b border-gray-400 text-white p-2 mb-6 outline-none"
          />

          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-black px-6 py-3 rounded-full w-fit">
            Book A Call
          </button>
        </div>

        <div className="flex gap-16">
          <div>
            <h2 className="font-bold text-lg">LONDON</h2>
            <p className="text-gray-400">Bakery Street, UK 291829 2C</p>
            <p className="text-gray-400">Kingdom, United</p>
            <p className="text-gray-400">(0129) 21222 – 121212</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">INDONESIA</h2>
            <p className="text-gray-400">Kediri, Perumahan Sukorjo</p>
            <p className="text-gray-400">Street DD 10, Katang</p>
            <p className="text-gray-400">628223454342-1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact