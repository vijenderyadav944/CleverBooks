import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky bg-black text-white px-10 py-5 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="./images/Logo-White.svg" alt="Logo" className="h-15 w-60" />
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="ProblemSolved" className="hover:text-zinc-400">
          Product
        </a>
        <a href="#" className="hover:text-zinc-400">
          Pricing
        </a>
        <a href="#" className="hover:text-zinc-400">
          Industry
        </a>
        <a href="#" className="hover:text-zinc-400">
          Customer Stories
        </a>
        <a href="#" className="hover:text-zinc-400">
          About
        </a>
        <a href="#" className="hover:text-zinc-400">
          Blog
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-pink-400 hover:text-pink-300">
          Login
        </a>
        <a
          href="#"
          className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full">
          Talk to Us
        </a>
      </div>
    </nav>
  )
};

export default Navbar;