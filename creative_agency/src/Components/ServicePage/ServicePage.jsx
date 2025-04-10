import React from 'react'

function ServicePage() {
  return (
    <>
        <div className="bg-black text-white min-h-screen">

      <header className="text-center py-16">
        <h1 className="text-6xl font-bold">SERVICE</h1>
        <p className="text-gray-400 mt-2">Empowering Brands Through Creativity and Innovation</p>
      </header>

      <section className="space-y-4 px-6">
        {['BRAND IDENTITY', 'WEBSITE DESIGN', 'WEB DEVELOPMENT', 'SEO STRATEGY'].map((service, index) => (
          <div key={index} className="bg-gray-800 py-4 px-6 rounded-xl flex items-center justify-between cursor-pointer">
            <span className="text-lg font-semibold">{service}</span>
            <span className="text-gray-400">⬤</span>
          </div>
        ))}
      </section>

      <section className="py-12 px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-gray-600 h-52 rounded-xl"></div>
        ))}
      </section>

      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-8">HOW IT WORKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className="bg-gray-800 p-6 rounded-xl text-left space-y-2"
            >
              <div className="text-xl font-bold">0{step}</div>
              <p className="text-gray-400">
                {step === 1
                  ? 'Understand client’s needs and tailor solutions accordingly.'
                  : step === 2
                  ? 'Create innovative concepts that align with brand goals.'
                  : step === 3
                  ? 'Ensure effective collaboration to achieve project success.'
                  : 'Complete project development with impactful results.'}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">COLLABORATE CLOSELY WITH CLIENTS</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Develop solutions that reflect the brand's identity.</li>
          <li>Continuously push the boundaries of creativity and technology.</li>
          <li>Craft high-quality, tailored solutions in website design.</li>
        </ul>

        <div className="bg-gray-600 h-52 rounded-xl mt-6"></div>
      </section>
    </div>
    </>
  )
}

export default ServicePage