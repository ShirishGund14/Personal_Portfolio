import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
    const naigate=useNavigate();

    
    return (
        <div className='w-full  bg-[#191b1c] text-gray-500  p-4 md:p-8'>
            <div className='uppercase text-3xl md:text-6xl tracking-wide mb-5 p-4  border-b border-b-[lines]'>About me</div>
           
            <div className='flex justify-between md:flex-row'>
                <div className=' w-[80%]   text-xl md:text-5xl md:leading-relaxed border-r border-r-[lines] p-3 md:p-6 font-bold tracking-wide font-sans'>
                    A <span className='text-p'>code-blooded photographer </span>continuing journey of <span className='text-p'>photography</span> and <span className='text-p'>coding </span>,
                    which started with capturing memories through each <span className='text-p'>single click</span> and the writing of the first <span className='text-p'>Hello World program.</span>
                </div>

                {/* right icons section */}
                <div className='w-[20%]  flex  flex-col  md:flex-row items-center justify-center gap-4 p-2'>
                    <div>
                       
                    
                        <Link to={'https://www.linkedin.com/in/shirish-gund-63374b21b/'}  target='_blank' className='bg-p hidden md:block  p-2 md:p-4 text-black font-medium  w-full md:w-[6rem] hover:bg-lines'>Linkedin</Link>
                        <Link to={'https://github.com/ShirishGund14'} target='_blank' className='bg-p  hidden md:block p-2 md:p-4 text-black font-medium w-full md:w-[6rem]  hover:bg-lines'>Github</Link>
                        <Link to={'https://www.geeksforgeeks.org/user/shirish14g/'} target='_blank' className='bg-p hidden md:block  p-2 md:p-4 text-black font-medium  w-full md:w-[6rem] hover:bg-lines'>GFG</Link>
                        <Link to={'https://leetcode.com/u/Shirish_Gund/'} target='_blank' className='bg-p  hidden md:block p-2 md:p-4 text-black font-medium w-full md:w-[6rem]  hover:bg-lines'>Leetcode</Link>

                    </div>
                    <div className='flex flex-col gap-5 md:gap-0'>

                       <Link to={'https://www.linkedin.com/in/shirish-gund-63374b21b/'}  target='_blank'> <SlSocialLinkedin className='md:hidden text-p text-2xl' /></Link>
                        <Link to={'https://github.com/ShirishGund14'} target='_blank'>
                        <FiGithub className='md:hidden  text-p text-2xl' />
                        </Link>
                        
                        <Link to={'https://www.geeksforgeeks.org/user/shirish14g/'} target='_blank'>
                        <SiGeeksforgeeks className='md:hidden  text-p text-2xl' />
                        </Link>
                      
                      <Link to={'https://leetcode.com/u/Shirish_Gund/'} target='_blank'>
                      <SiLeetcode className='md:hidden  text-p text-2xl' />
                      </Link>
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
