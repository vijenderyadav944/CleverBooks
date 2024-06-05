import React from 'react'

const Hero = () => {
  return (
    <div className="pb-32 bg-zinc-900 text-white py-16 px-8 md:px-16 lg:px-32 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Every order <br />
            fulfilled, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">on time.</span>
          </h1>
          <p className="text-zinc-400 mb-8">
            Eliminate overstocking and under-stocking with CleverBooks. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full shadow-lg">
            Get started with CleverBooks
          </button>
          <div className="mt-4 text-purple-400">
            <p className="italic">
              Integrate your logistics stack with CleverBooks in just two days
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src="./images/Hero-Image.svg" alt="Hero" className="w-full h-auto" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-zinc-900 rounded-t-full"></div>
    </div>
)
}

export default Hero;