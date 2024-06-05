import React from 'react'

const ProblemSolved = () => {
  return (
    <div id='ProblemSolved' className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Four key questions answered by CleverBooks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-purple-100 p-6 rounded-lg text-center">
          <img src="./images/Problem1.svg" alt="clipboard icon" className="mx-auto mb-4" width={50} />
          <h3 className="text-xl font-semibold mb-2">What to order</h3>
          <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg text-center">
          <img src="./images/Problem2.svg" alt="shopping bag icon" className="mx-auto mb-4" width={50} />
          <h3 className="text-xl font-semibold mb-2">When to order</h3>
          <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg text-center">
          <img src="./images/Problem3.svg" alt="shelf icon" className="mx-auto mb-4" width={50} />
          <h3 className="text-xl font-semibold mb-2">How much to stock</h3>
          <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg text-center">
          <img src="./images/Problem4.svg" alt="warehouse icon" className="mx-auto mb-4" width={50} />
          <h3 className="text-xl font-semibold mb-2">Where to place</h3>
          <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
        </div>
      </div>
    </div>
  )
}

export default ProblemSolved