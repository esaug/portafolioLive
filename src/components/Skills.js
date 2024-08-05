import React from 'react'
import {
    SiReact, SiJavascript, SiHtml5,
    SiTailwindcss, SiSolidity, SiBlockchaindotcom,
    SiGit, SiWeb3Dotjs, SiAwsfargate, SiNestjs,
    SiPostgresql, SiTypeform, SiTypescript
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoFirebase, BiLogoSass } from 'react-icons/bi'
import {FaCss3Alt } from 'react-icons/fa'
import {AiFillApi} from 'react-icons/ai'
import {IoLogoNodejs} from 'react-icons/io'


export default function Skills() {

    const skills = [{ icon: <SiReact color="2196f3" className="mx-auto text-6xl" />, name: "React.Js" },
    { icon: <IoLogoNodejs color="3c873a" className="mx-auto text-6xl" />, name: "Node.Js"},
    { icon: <SiJavascript color="ffdf00" className="mx-auto text-6xl" />, name: "JavaScript" },
    { icon: <SiTailwindcss color="2196f3" className="mx-auto text-6xl" />, name: "TailwindCSS" },
    { icon: <TbBrandNextjs color="000000" className="mx-auto text-6xl" />, name: "Next.Js" },
    { icon: <SiHtml5 color="ff6600" className="mx-auto text-6xl" />, name: "HTML" },
    { icon: <FaCss3Alt color="264de4" className="mx-auto text-6xl" />, name: "CSS"},
    { icon: <BiLogoSass color="cc6699" className="mx-auto text-6xl" />, name: "Sass"},
    { icon: <SiSolidity color="5c5c8a" className="mx-auto text-6xl" />, name: "Solidity"},
    { icon: <SiBlockchaindotcom color="ffdf00" className="mx-auto text-6xl" />, name: "Blockchain"},
    { icon: <SiWeb3Dotjs color="2196f3" className="mx-auto text-6xl" />, name: "Web3.Js"},
    { icon: <SiGit color="ff3300" className="mx-auto text-6xl" />, name: "Git"},
    { icon: <BiLogoFirebase color="F5820D" className="mx-auto text-6xl" />, name: "FireBase"},
    { icon: <SiAwsfargate color="FF9900" className="mx-auto text-6xl" />, name: "AWS"},
    { icon: <AiFillApi color="FF9900" className="mx-auto text-6xl" />, name: "Api Rest"},
    { icon: <SiNestjs color="e01c4c" className="mx-auto text-6xl" />, name: "Nest.Js"},
    { icon: <SiPostgresql color="2196f3" className="mx-auto text-6xl" />, name: "PostGres"},
    { icon: <SiTypeform color="2196f3" className="mx-auto text-8xl" />, name: ""},
    { icon: <SiTypescript color="2196f3" className="mx-auto text-6xl" />, name: "Type Script"}]


    return (
        <div className='max-w-4xl mx-auto justify-center py-12' id="tech" >


            <p className=' text-black text-4xl pt-4 font-bold text-center'>
                Tech I use
            </p>

            <div className='flex flex-wrap justify-center pt-2'>

                {skills.map((skill, index) => {

                    return (
                        <div className='flex flex-col w-40 p-10 m-6 
                            overflow-hidden bg-white shadow-2x1 rounded-xl sm:w-52
                            
                            '>
                            {skill.icon}
                            <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>
                                {skill.name}
                            </p>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}
