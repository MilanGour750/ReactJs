import React from 'react'

function Error() {
  return (
    <>
        <div className="text-center">
        <div className="bg-gray-300 w-[500px] h-[500px] mx-auto rounded-lg flex items-center justify-center">
          <div>
            <h1 className="text-6xl font-extrabold">404 ERROR</h1>
            <p className="text-gray-400 mt-4">
              Ooops! The page you are looking for does not exist.  
              It might have been moved or deleted.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error