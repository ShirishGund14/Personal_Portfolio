import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const About = () => {
    return (
        <div className='w-full  bg-[#191b1c] text-gray-500  p-4 md:p-8'>
            <div className='uppercase text-3xl md:text-6xl tracking-wide mb-5 p-4  border-b border-b-[lines]'>About me</div>
           
            <div className='flex justify-between md:flex-row'>
                <div className=' w-[80%]   text-xl md:text-5xl md:leading-relaxed border-r border-r-[lines] p-3 md:p-6 font-bold tracking-wide font-sans'>
                    A <span className='text-p'>code-blooded photographer </span>continuing<span className='text-p'>photography </span>and the <span className='text-p'>coding </span>journey,
                    which started with capturing memories through each <span className='text-p'>single click</span> and the writing of the of the first <span className='text-p'>Hello World program.</span>
                </div>

                {/* right icons section */}
                <div className='w-[20%]  flex  flex-col  md:flex-row items-center justify-center gap-4 p-2'>
                    <div>
                        <button className='bg-p hidden md:block  p-2 md:p-4 text-black font-medium  w-full md:w-[6rem] hover:bg-lines'>Linkedin</button>
                        <button className='bg-p  hidden md:block p-2 md:p-4 text-black font-medium w-full md:w-[6rem]  hover:bg-lines'>Github</button>
                        <button className='bg-p hidden md:block  p-2 md:p-4 text-black font-medium  w-full md:w-[6rem] hover:bg-lines'>GFG</button>
                        <button className='bg-p  hidden md:block p-2 md:p-4 text-black font-medium w-full md:w-[6rem]  hover:bg-lines'>Leetcode</button>

                    </div>
                    <div className='flex flex-col gap-5 md:gap-0'>

                        <SlSocialLinkedin className='md:hidden text-p text-2xl' />
                        <FiGithub className='md:hidden  text-p text-2xl' />
                        <SiGeeksforgeeks className='md:hidden  text-p text-2xl' />
                        <SiLeetcode className='md:hidden  text-p text-2xl' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
