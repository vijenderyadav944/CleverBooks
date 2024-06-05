import React from 'react'

const Footer = () => {
  return (
    <div className="bg-zinc-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="./images/Logo-White.svg" alt="CleverBooks Logo" className="mb-4" />
          <p className="text-zinc-400 mb-4 mt-20">
            CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 ml-10">Explore</h3>
          <ul className="space-y-2 ml-10">
            <li><a href="#" className="text-zinc-400 hover:text-white">Product</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white">Career</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Learn</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-zinc-400 hover:text-white">About us</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact CleverBooks</h3>
          <p className="text-zinc-400 mb-4">sales@getCleverBooks.ai</p>
          <p className="text-zinc-400 mb-4">
            Registered Office:<br />
            1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102
          </p>
          <p className="text-zinc-400 mb-4">
            Corporate Office:<br />
            291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102
          </p>
          <div className="flex space-x-4">
            <a href="https://x.com/Get_CleverBooks" undefinedlabel="Twitter"><img src="./icons/Twitter-Logo.svg" alt="Twitter" width={24} /></a>
            <a href="https://www.facebook.com/getCleverBooks" undefinedlabel="Facebook"><img src="./icons/Facebook-Logo.svg" alt="Facebook" width={24}/></a>
            <a href="https://www.instagram.com/getCleverBooks/?hl=en" undefinedlabel="Instagram"><img src="./icons/Instagram-Logo.svg" alt="Instagram" width={25}/></a>
            <a href="https://www.linkedin.com/company/get-CleverBooks/" undefinedlabel="LinkedIn"><img src="./icons/LinkedIn-Logo.svg" alt="LinkedIn" width={27}/></a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-zinc-700 pt-6 text-center text-zinc-400">
        <p>Copyright 2024 CleverBooks &nbsp;&nbsp;|&nbsp;&nbsp; <p className="hover:text-white">Terms of Service</p> &nbsp;&nbsp;|&nbsp;&nbsp; <a className="hover:text-white">Privacy Policy</a></p>
        <p className="mt-4">Conifer Innovations Private Limited<br />CIN: U72900KA2022PTC163144</p>
      </div>
      <div className="mt-6 flex justify-center">
        <a className="flex items-center justify-center w-12 h-12 bg-zinc-700 rounded-full cursor-pointer" onClick={onclick = function() {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}>
          <img src="./icons/Top.svg" alt="Scroll to top" />
        </a>
      </div>
    </div>
)
}

export default Footer