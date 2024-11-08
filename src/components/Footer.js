import React from 'react'
import {FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa"



export default function Footer() {
  return (
        <div className='flex flex-col mt-4 py-5 border-t-3/2 justify-center'>

            <div className=" flex  align-center justify-center mt-4">
                        
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/esaug?tab=repositories">
                    <FaGithub/>
                    <span className="sr-only">Github</span>
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-400 hover:bg-blue-400 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/esauguerrar/">     
                    <FaLinkedinIn/>
                    <span className="sr-only">Linkeding</span>     
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-orange-800 hover:bg-orange-800 rounded-full hover:text-white transition-colors duration-300" href="mailto:me.esauguerra1@gmail.com">
                     <FaEnvelope/>
                    <span className="sr-only">Email</span>
                </a>

            </div>

            <div className='flex justify-center mt-4 '>
                <p className='text-black mb-4 '> Made with</p>
                <span className='mr-2 pl-[5px]'  role="link" arial-label="heart"> ❤️ </span>by <a className='text-blue-500 hove:underline pl-[5px]' href="mailto:me.esauguerra1@gmail.com">  Esau Guerra</a>
            </div>

        </div>
  )
}
