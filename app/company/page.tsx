import React from 'react'

const HomePage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500">danMusa</h1>
        <p className="text-xl text-gray-600">Welcome to danMusa</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default HomePage