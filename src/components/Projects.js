import React from 'react'
import MaitixLogo from '../images/logo.png'
import OufcLogo from '../images/oufc.png'
import SafyLogo from '../images/safyLogo.png'
import Cosmic from '../images/cosmic.png'
import ChainStory from '../images/chainStory.png'
import Eiffel from '../images/eiffel.png'
import Isipay from '../images/isiPayLogo2.png'

export default function className
  () {

  const projects = [
    {title: "Travel LadingPage", link: "https://landingpage-live.vercel.app/", img: Eiffel},
    {title: "Chain Story", link: "https://cstory5.vercel.app/", img: ChainStory},
    {title: "Maitrix", link: "https://maitix-front-git-production-esaug.vercel.app/", img: MaitixLogo},
    {title: "SafyRide web page", link: "https://admin-panel-safy.vercel.app/", img: SafyLogo},
    {title: "Out of The Flame Club", link: "https://oubita-rinkeby.vercel.app/", img:  OufcLogo},
    {title: "Coscmic Animals", link: "https://cosmic-collection.vercel.app/", img: Cosmic},
    {title: "Isipay", link: "https://youtu.be/ejN_5aWraio?si=Suuq-1RGiX2eZKVn", img: Isipay}]

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
              <a href={proj.link} target="_blank">

                <img className='w-[130px] h-[120px] mx-auto' src={proj.img}/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>{proj.title}</p>

              </a>
            </div>
          )

        })}


      </div>
    </div>
  )
}

