import React from 'react'

function Post() {
  return (
    <div className="bg-black min-h-screen text-white p-8">

      <div className="grid grid-cols-3 gap-8">

        <div className="col-span-2">
          <h2 className="text-3xl font-bold mb-4">
            The Importance of Visual Storytelling in Modern Marketing
          </h2>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>

          <p className="text-gray-400 mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...
          </p>

          <div className="bg-gray-300 w-full h-[300px] rounded-lg mb-6"></div>

          <div className="border-t border-gray-600 my-6"></div>

          <h3 className="font-bold mt-6">Bold and Oversized Typography</h3>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>

          <h3 className="font-bold mt-6">Sustainable Web Design</h3>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>

        <div>
          <div className="mb-8">
            <h3 className="font-bold">Relate Article</h3>
            <ul className="text-gray-400">
              <li>- 2024 Color Trends in Interior Design</li>
              <li>- Behind-the-scenes content of recent projects</li>
              <li>- Profiles of unique collaborations or client spaces</li>
              <li>- The Latest Trends in Modern Architecture</li>
            </ul>
          </div>

          <div className="border-t border-gray-600 my-6"></div>

          <div>
            <h3 className="font-bold">Tag Related</h3>
            <ul className="text-gray-400">
              <li>#modern</li>
              <li>#minimalist</li>
              <li>#CreativeAgency</li>
              <li>#DarkTheme</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-extrabold text-center mb-8">RELATED ARTICLE</h2>

        <div className="grid grid-cols-2 gap-8">
          {[...Array(2)].map((_, index) => (
            <div key={index}>
              <div className="bg-gray-300 w-full h-[200px] rounded-lg mb-4"></div>
              <h3 className="font-bold">
                {index % 2 === 0
                  ? 'How to Collaborate with a Creative Agency for Maximum Impact'
                  : 'The Importance of Visual Storytelling in Modern Marketing'}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Learn the latest tips and strategies to enhance creative collaboration and boost
                your visual branding.
              </p>

              <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-black px-4 py-2 rounded-full w-fit">
                {index + 1}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
            
  )
}

export default Post