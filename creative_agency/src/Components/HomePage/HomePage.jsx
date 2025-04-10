import React from 'react'

function HomePage() {
  return (
    <>
      <div className="relative bg-black text-white">
        <div className=" bg-gray-500 h-64 grid place-items-center">
          <h1 className="text-5xl font-bold">CREATIVE AGENCY</h1>
        </div>

        <div className="flex items-center justify-between px-8 py-4 text-center">
          <p className="text-lg font-semibold">26k+ Happy Customers</p>
          <div className="flex space-x-4 text-2xl text-gray-400">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>

        <div className="text-center px-8 py-12">
          <p className="text-lg leading-relaxed">
            We're a team of creative professionals dedicated to crafting unique digital experiences.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition">
            Book A Call
          </button>
        </div>

        <div className="py-12">
          <h2 className="text-6xl text-center font-extrabold mb-12">OUR TEAM</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {Array(4).fill('').map((_, index) => (
              <div key={index} className="bg-gray-500 h-80 rounded-xl shadow-md"></div>
            ))}
          </div>
        </div>

        <div className="py-12 space-y-4">
          {['BRAND IDENTITY', 'WEBSITE DESIGN', 'WEB DEVELOPMENT', 'SEO STRATEGY'].map((service, index) => (
            <div key={index} className="flex justify-between items-center px-8 py-6 border-b border-gray-700 hover:bg-gray-800 rounded-lg transition">
              <h3 className="text-2xl font-bold">{service}</h3>
              <span className="text-3xl">→</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-black py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
            {[{ title: 'CREATIVE', icon: 'fas fa-project-diagram' },
              { title: 'COLLABORATIVE', icon: 'fas fa-cogs' },
              { title: 'PROVEN SCALE', icon: 'fas fa-chart-line' },
              { title: 'MAGIC PATTERN', icon: 'fas fa-magic' }].map((feature, index) => (
                <div key={index} className="space-y-2  p-4 ">
                  <i className={`${feature.icon} text-3xl text-white`}></i>
                  <h4 className="font-bold text-white">{feature.title}</h4>
                  <p className="text-sm text-white">Transform your ideas into reality with our proven methods.</p>
                </div>
            ))}
          </div>
        </div>

        <div className="py-12 flex flex-col md:flex-row items-center px-8 space-y-8 md:space-y-0">
          <div className="flex-1 text-left space-y-4">
            <h2 className="text-4xl font-extrabold">MEET OUR <br /> FOUNDER</h2>
            <p className="text-lg leading-relaxed">
              Our founder leads a team of passionate creatives dedicated to bringing your digital visions to life.
            </p>
          </div>
          <div className="flex-1 bg-gray-500 h-[400px] w-full max-w-xs rounded-xl shadow-lg"></div>
        </div>

        <div className="bg-black text-white min-h-screen py-12 px-6">
          <h1 className="text-5xl font-bold text-center mb-12">CURRATED PROJECT</h1>
          <div className="grid grid-cols-1 gap-8">
            {[{ title: "BRANDING", desc: "We’re a team of creative professionals dedicated to crafting unique digital experiences." },
              { title: "SEO STRATEGY", desc: "We’re a team of creative professionals dedicated to crafting unique digital experiences." },
              { title: "BRANDING", desc: "We’re a team of creative professionals dedicated to crafting unique digital experiences." },
              { title: "WEBSITE DESIGN", desc: "We’re a team of creative professionals dedicated to crafting unique digital experiences." }
            ].map((project, index) => (
              <div key={index} className={`flex items-center space-y-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="bg-gray-500 h-56 w-full md:w-1/2 rounded-xl"></div>
                <div className="md:w-1/2 p-4">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-gray-400">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage