import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar'
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import Photography from './Pages/Photography'
import Footer from './Pages/Footer'
import IconsSection from './Pages/IconsSection'

function App() {
  
  

  return (
    <div className=''>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      {/* <IconsSection/> */}
      <Photography/>
      <Footer/>

     
    </div>
  )
}

export default App
