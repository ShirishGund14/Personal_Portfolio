import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Navbar = ({ toggleNavBar, keyBoardAudioRef }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    if (keyBoardAudioRef.current) {
      keyBoardAudioRef.current.play();
    }
    setIsExiting(true);
    setTimeout(() => {
      toggleNavBar();
    }, 300); // Duration of the exit animation
  };

  return (
    <div className={`h-screen w-full fixed top-0 left-0 right-0 bottom-0 bg-p z-[999999999] p-10 md:p-20 transition-transform duration-300 ease-out ${isExiting ? 'animate-slideOut' : 'animate-slideIn'}`}>
      <div>
        <div className='flex justify-between items-center text-bgBlack tracking-wider border-b-4 border-b-bgBlack'>
          <div className='text-5xl md:text-8xl'>SHIRISH</div>
          <button className='text-5xl' onClick={handleClose}><IoMdClose /></button>
        </div>
        <div className='text-lines text-[2rem] md:text-7xl tracking-wider flex flex-col gap-5 mt-5'>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white'>01 Home</div>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white'>02 About Me</div>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white'>03 Projects</div>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white'>04 Photography</div>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white'>05 Skills</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
