import React from "react"
import profile from "../images/yo.jpeg"
import {FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa"

function Card(){
    return(
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-ms max-auto bg-white shadow-xl rounded-x1 p-5">
                
                <div className="">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt= "profile photo"/>
                
                </div>
                
                <div className="text-center mt-5">
                    
                    <p className="text-xl sm:text-2xl text-gray-900 font-semibold">
                        Esau Guerra
                    </p>
                    
                    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block boder-b-2">
                        Full Stack Developer and Blockchain
                    </p>
                    
                    <div className=" flex align-center justify-center mt-4">
                        
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/esaug?tab=repositories">
                            
                            <FaGithub/>
                            <span class="sr-only">Github</span>
                        
                        </a>

                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-400 hover:bg-blue-400 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/esaug?tab=repositories">
                            
                            <FaLinkedinIn/>
                            <span class="sr-only">Linkeding</span>
                        
                        </a>

                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/esaug?tab=repositories">
                            
                            <FaTwitter/>
                            <span class="sr-only">Twitter</span>
                        
                        </a>

                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-orange-800 hover:bg-orange-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/esaug?tab=repositories">
                            
                            <FaEnvelope/>
                            <span class="sr-only">Email</span>
                        
                        </a>

                    </div>
                </div>        
                
            </div>
        </div>
    )
}

export default Card