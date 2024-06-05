import React from 'react'
import "./index.css"

const SubFooter = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-zinc-900">
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 rounded-xl shadow-lg animate-gradient-x h-[510px] w-[1000px]">
          <h1 className="text-4xl font-extrabold text-white mt-20 text-center">You can grow faster than you think!</h1>
          <p className="text-white mb-6 mt-28 text-center">Plan with CleverBooks to fulfill your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
          <div className='flex justify-center items-center'>
            <button className="bg-black text-white py-2 px-6 rounded-full mt-10">Get started with CleverBooks</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubFooter