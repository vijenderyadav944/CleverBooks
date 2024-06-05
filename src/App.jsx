import React from 'react'
import './index.css'
import './Components/debug.js'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProblemSolved from './Components/ProblemSolved'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import SubFooter from './Components/SubFooter'
import Founders from './Components/Founders'
import Advantages from './Components/Advantages'
import Services from './Components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolved />
      <Services />
      <Testimonials />
      <Advantages />
      <Founders />
      <SubFooter />
      <Footer />
    </>
  )
}

export default App
