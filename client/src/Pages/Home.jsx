import React from 'react'
import MyImg from '../img/Myimg.png';

const Home = () => {
  return (
    // bg-MyImg bg-cover
   
    <div className='bg-[#040404]  text-zinc-500  w-full h-screen p-10  relative overflow-hidden '>
    <div className='text-7xl md:text-9xl uppercase font-semibold'> shirish</div>
    <div className='text-7xl md:text-9xl uppercase font-semibold '> Gund</div>
    <img src={MyImg} className='myimg w-full h-screen object-contain absolute -top-[0.5rem] md:-top-[5rem] sm:-left-5 '/>
    <button className='bg-green-500 p-4 absolute text-black mt-8 hover:bg-p '>Menu</button>


    </div>
  )
}

export default Home
