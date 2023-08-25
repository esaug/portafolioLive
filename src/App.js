import React, { useEffect } from "react"
import Card from "./components/Cards"
import About from "./components/About"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
import ContactMe from "./components/Contact"
import Projects from "./components/Projects"
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function App() {

  useEffect(()=>{
    Aos.init({
      once: true,
    })
  })

  return (
    <div className='main-h-screen py-10 px-3 sm:px-5 bg-gray-100'>
      <div data-aos='fade-down' data-aos-duration='800'>
        <Card />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
        <About />
      </div>
     
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>

      
    </div>
  )
}