import React from 'react'
import MaitixLogo from '../images/logo.png'
import OufcLogo from "../images/oufc.png"
import SafyLogo from "../images/safyLogo.png"
import Cosmic from "../images/cosmic.png"
import Container from "../images/container.png"
import ChainStory from "../images/chainStory.png"
import Eiffel from "../images/eiffel.png"

export default function className
  () {

  const projects = ["Travel LadingPage", "Chain Story", "Container Fusion",
    "Maitrix", "SafyRide Admin Panel", "Out of The Flame Club", "COSMIC"]

  const imgProject = [Eiffel, ChainStory, Container,
  MaitixLogo, SafyLogo, OufcLogo, Cosmic]

  const projectUrl = ["https://landingpage-live.vercel.app/", "https://cstory5.vercel.app/", "https://contraine-cc-favo.vercel.app/",
  "https://maitix-front.vercel.app/en", "https://admin-panel-safy.vercel.app/", 
  "https://oubita-rinkeby.vercel.app/", "https://cosmic-collection.vercel.app/"]


  return (
    <div className='max-w-4xl mx-auto justify-center py-12'>

      <p className=' text-black text-4xl pt-4 font-bold text-center'>Projects</p>

      <div className='flex flex-wrap justify-center pt-2'>

        {projects.map((proj, index) => {

          return (
            <div className='flex flex-col w-100 h-200 p-10 m-6 overflow-hidden 
              bg-white shadow-2x1 rounded-xl sm:w-52'
              key={index}
              >
              <a href={projectUrl[index]} target="_blank">

                <img className='w-[130px] h-[120px] mx-auto' src={imgProject[index]}/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>{proj}</p>

              </a>
            </div>
          )

        })}


      </div>
    </div>
  )
}

