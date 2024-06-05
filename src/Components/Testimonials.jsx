import React from 'react'

const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-white pl-32 dark:bg-white">
      <div className="lg:w-1/2">
        <p className="text-black mb-4">
          D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. CleverBooks automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see CleverBooks unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
        </p>
        <div className="flex items-center mb-4">
          <img src="./images/Testimonial1.webp" alt="Profile Picture" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="text-lg font-semibold text-black dark:text-black">Diksha Pande</p>
            <p className="text-zinc-600 dark:text-zinc-400">Co-founder, Samosa Party</p>
          </div>
          <div className='flex flex-col'>
            <img src="./images/Testimonial1-1.webp" alt="" />
          </div>
        </div>
        <div className="flex space-x-2 mb-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            <span className="sr-only">Previous</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 14.707a1 1 0 01-1.414 0L7 10.414a1 1 0 010-1.414l4.293-4.293a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
            <span className="sr-only">Next</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 001.414 0L13 10.414a1 1 0 000-1.414L8.707 4.707a1 1 0 00-1.414 1.414L10.586 10 7.293 13.293a1 1 0 000 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="flex space-x-4">
          <div className="bg-purple-100 text-purple-700 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">upto 95%</p>
            <p className="text-sm">Demand Fulfilment</p>
          </div>
          <div className="bg-purple-100 text-purple-700 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold">&lt; 3%</p>
            <p className="text-sm">Daily Stock-out</p>
          </div>
          <div className="flex items-center justify-center p-4 border-2 border-purple-500 rounded-lg text-purple-500 hover:bg-purple-500 hover:text-white">
            <p className="text-sm font-semibold">Read story</p>
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[400px] overflow-hidden lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
        <img src="./images/Testimonial1-2.webp" alt="Samosa Party" className="rounded-lg border border-purple-200" />
      </div>
    </div>
  )
}

export default Testimonials