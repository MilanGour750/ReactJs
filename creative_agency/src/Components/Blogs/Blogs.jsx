import React from 'react'

function Blogs() {
  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-extrabold">BLOG</h1>
        <p className="text-gray-400">
          Stay ahead with the latest trends, tips, and stories from the industry
        </p>
      </div>
      <div className="bg-gray-300 w-full h-[300px] rounded-lg mb-8 relative">
        <div className="absolute bottom-0  w-full p-4 rounded-b-lg">
          <h2 className="text-xl font-bold">
            The Future of Branding: Why Creativity <br /> 
            and Strategy Go Hand-in-Hand
          </h2>
          <p className="text-white text-sm">
            Explore trends in design, content strategy, and digital marketing <br /> to boost your
            brand’s reach and impact. Uncover market shifts and <br />social trends that influence
            modern brands in 2025.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <div className="bg-gray-300 w-full h-[200px] rounded-lg mb-4"></div>
            <h3 className="font-bold">
              {index % 2 === 0
                ? 'How to Collaborate with a Creative Agency for Maximum Impact'
                : 'The Importance of Visual Storytelling in Modern Marketing'}
            </h3>
            <p className="text-gray-400 text-sm">
              Learn how to streamline project execution with effective collaboration. Discover
              content design trends, visual storytelling strategies, and creative development
              insights.
            </p>


            <button className="mt-4 bg-gradient-to-r from-pink-500 to-orange-500 text-black px-4 py-2 rounded-full w-fit">
              ➔
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs