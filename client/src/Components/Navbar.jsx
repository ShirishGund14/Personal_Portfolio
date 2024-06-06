import React from 'react'
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='h-screen w-full fixed top-0 left-0 right-0 bottom-0  bg-p z-[999999999] p-10 md:p-20'>
      <div >
        <div className='flex justify-between items-center text-bgBlack tracking-wider border-b-4 border-b-bgBlack'>
          <div className=' text-5xl md:text-8xl'>SHIRISH</div>
          <button className='text-5xl'><IoMdClose /></button>
        </div>
        <div className=' text-lines   text-[2rem] md:text-7xl tracking-wider flex flex-col gap-5 mt-5'>
          <div className=''>01 Home</div>
          <div className=''>02 About Me</div>
          <div className='' >03 Projecets</div>
          <div className='' >04 Photography</div>
          <div className=''>05 Skills</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
