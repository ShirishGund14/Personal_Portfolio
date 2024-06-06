import React from 'react'
import { RxCamera } from "react-icons/rx";
import { MdDataObject, MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaCode, FaCodeFork } from "react-icons/fa6";
import { CiCircleList } from "react-icons/ci";
import { FaCodepen } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className='w-full h-auto flex flex-col md:flex-row bg-bgBlack text-gray-500 p-4'>
      {/* left section */}
      <div className=' w-full h-[50%]  md:w-[70%] md:mr-3   md:border-r md: border-r-lines'>
        <p className='text-[2.3rem] md:text-9xl   uppercase py-6'>
          <span className='text-p'>"</span> An investment in <span className='text-p'>knowledge</span> pays the best interest <span className='text-p'>"</span>
        </p>
      </div>
      {/* right section */}

      <div className=' w-full md:w-[30%]' >

        <div className='border-t border-t-p h-[25%] p-8 flex flex-col md:flex-row justify-between '>
          <div>
            <div className=' text-xl md:text-2xl flex flex-col justify-left uppercase' >Data Structure & Algorithms</div>
            <FaCodepen className=' text-p text-[3rem] my-4' />
          </div>
          <div className='flex flex-col gap-3  text-lines'>
            450+ Qs @Leetcode+GFG
          </div>
        </div>

        <div className='border-t border-t-p h-[30%] p-8 flex f md:flex-row justify-between '>
          <div>
            <div className=' text-lg md:text-2xl flex flex-col justify-left uppercase mr-3' >
              <div>Developement </div>
              <div>Skills</div>
            </div>
            <FaCodeFork className=' text-p text-[2.5rem] mt-4' />
          </div>
          <div className='flex flex-col gap-3  text-lines '>
            <div className=''>Node.js</div>
            <div className=''>React.js</div>
            <div className=''>Express.js</div>
            <div className=''>MongoDb</div>
            <div className=''>Tailwindcss</div>
          </div>
        </div>

        <div className='border-t border-t-p h-[30%] p-8 flex justify-between '>
          <div>
            <div className='text-2xl flex flex-col justify-center uppercase mr-3' >Languages </div>
            <RiCodeSSlashFill className=' text-[3rem] text-p  mt-4' />
          </div>
          <div className='flex flex-col md:gap-3 text-lines'>
            <div>C++</div>
            <div>Java</div>
            <div>JavaScript</div>
            <div>SQL</div>
          </div>
        </div>

        <div className='border-t border-t-p h-[30%] p-5'>
          <div>
            <div className='text-2xl uppercase'>Photography</div>
            <RxCamera className='text-2xl text-p text-[3rem] mt-4' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills
