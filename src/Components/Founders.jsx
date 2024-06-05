import React from 'react'

import "./index.js"

const Founders = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 px-5 md:px-20">
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-xl">
          <img id="founders-image" className="transform transition-transform duration-1000 ease-out w-4/5" src="./images/Founders.webp" alt="Founders" />
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10">
        <h2 className="text-5xl font-extrabold mb-5">From the founders</h2>
        <p className="text-lg mb-5">
          We are a young company solving an age-old problem: Supply Chain. Our goal is simple: to eradicate stock outs for businesses that want to grow faster.
          Our background, tech expertise, and empathy allow us to do just that.
        </p>
        <p className="text-lg mb-5">
          Thank you for checking out CleverBooks, and we hope to help you always be in stock!
        </p>
        <button className="bg-purple-200 text-purple-700 font-semibold py-2 px-4 rounded-full">Learn more</button>
      </div>
    </div>
)
}

export default Founders