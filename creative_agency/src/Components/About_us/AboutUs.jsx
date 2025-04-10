import React from 'react';

function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="text-center py-16">
        <h1 className="text-6xl font-bold">ABOUT US</h1>
        <p className="text-gray-400 mt-2">Learn More About Us</p>
      </header>

      <section className="px-6 text-center max-w-3xl mx-auto space-y-6">
        <p className="text-lg leading-relaxed">
          We're a team of creative professionals dedicated to crafting unique digital experiences. With expertise in website design, copywriting, branding, and more, we transform your vision into impactful results.
        </p>
        <button className="bg-orange-500 px-6 py-3 rounded-full text-black text-sm">Book A Call</button>

        <div className="grid grid-cols-3 gap-8 py-8">
          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="text-gray-400">More than 10 years experience</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">256K</h2>
            <p className="text-gray-400">Active loyal subscribers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">99%</h2>
            <p className="text-gray-400">Project success score</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-600 h-64 rounded-xl"></div>
        <div className="bg-gray-600 h-64 rounded-xl"></div>
      </section>

      <section className="px-6 py-12">
        <h2 className="text-4xl font-bold">HISTORY</h2>
        <p className="text-gray-400 mt-4">
          Our agency began with a simple yet ambitious idea: to empower businesses with creative solutions that make a real impact. Founded in 2017, our journey started as a small team of passionate professionals with big dreams. Over the years, we have grown into a full-service creative agency, proudly collaborating with diverse clients worldwide.
        </p>
        <p className="text-gray-400 mt-4">
          From our first project — a winning website for a local business — to outlining comprehensive digital strategies for global brands, we've always been driven by the same core values: creativity, collaboration, and excellence.


        </p>
      </section>

      <div className="bg-black text-white min-h-screen">
      <header className="text-center py-16">
        <h1 className="text-6xl font-bold opacity-10">OUR TEAM OUR TEAM</h1>
      </header>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-gray-600 h-64 rounded-xl"></div>
        ))}
      </section>
      <section className="py-12 px-6 grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="text-gray-400 text-sm">LOGOIPSUM</div>
        ))}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">VISION</h2>
          <p className="text-sm">
            To be the leading creative agency that empowers brands with innovative and impactful solutions,
            transforming ideas into extraordinary experiences that inspire and connect.
          </p>
        </div>
        <div className="bg-gradient-to-r from-gray-700 to-transparent p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">MISSION</h2>
          <ul className="text-sm list-disc list-inside space-y-2">
            <li>Craft high-quality, tailored solutions in website design, branding, and digital strategies.</li>
            <li>Continuously push boundaries of creativity and technology to stay ahead in dynamic digital industries.</li>
            <li>Foster meaningful and long-lasting relationships with clients through impactful results.</li>
          </ul>
        </div>
      </section>
    </div>
    </div>
  );
}

export default AboutUs;
