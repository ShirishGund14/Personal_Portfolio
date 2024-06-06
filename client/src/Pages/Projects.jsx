import React from 'react'
import { MdControlCamera, MdCodeOff } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TbExternalLink } from "react-icons/tb";


const Projects = () => {
    return (
        <div className='w-full  bg-[#111111]   '>
            <div className='uppercase text-lg tracking-wide text-gray-500   py-5 px-5 '>Recent Projects</div>

            <div className='flex flex-col md:flex-row '>

                {/* project1 */}

                <div className=' md:w-1/2 bg-zinc-500 h-auto flex flex-col md:flex-row p-6 gap-5 items-center justify-between hover:bg-transparent hover:text-gray-500 hover:border-t-2 hover:border-t-p'>
                    <div className='flex   md:flex-col gap-5  items-center  hover:text-p'>
                        <div className='hidden md:block md:-rotate-90  text-2xl md:text-lg tracking-widest font-bold uppercase'>CPYLER</div>
                        <div className='flex justify-center items-center md:flex-col '>
                            <div className=' md:hidden text-lg tracking-widest font-bold border-t w-20'></div>
                            <div className='text-5xl mb-3 '><MdCodeOff /></div>
                            <div className='md:-rotate-90 text-lg tracking-widest font-bold border-t w-20'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 justify-evenly  '>
                        <div className='text-4xl uppercase font-medium'>Cpyler :<span className='font-light'>Online code compiler</span></div>

                        <div className='bg-[#191b1c] text-gray-500  h-52  p-6 md:p-8 md:h-[22vw]  hover:bg-zinc-500 hover:text-black' >
                            <div className='text-sm md:text-xl h-20 md:h-[80%] overflow-y-auto md:overflow-y-hidden '>CPYLER is a online code compiler which can run C,C++ and Python codes ,it is full stack project which is made by using techstack ReactJs for the frontend and Material UI and Nodejs and expressJs for the backend and MongoDb for the database</div>
                            <button className=' bg-p text-black p-4 tracking-wider mt-5  md:mt-0 uppercase'>CPYLER</button>
                        </div>
                    </div>
                </div>

                {/* PROJECT2 */}

                <div className=' md:w-1/2 bg-zinc-500 h-auto flex flex-col md:flex-row p-6 gap-5 items-center justify-between hover:bg-transparent hover:text-gray-500 hover:border-t-2 hover:border-t-p'>
                    <div className='flex   md:flex-col gap-5  items-center  hover:text-p'>
                        <div className='hidden md:block md:-rotate-90  text-2xl md:text-lg tracking-widest font-bold uppercase'>clicks</div>
                        <div className='flex justify-center items-center md:flex-col '>
                            <div className=' md:hidden text-lg tracking-widest font-bold border-t w-20'></div>
                            <div className='text-5xl mb-3 '><MdControlCamera /></div>
                            <div className='md:-rotate-90 text-lg tracking-widest font-bold border-t w-20'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 justify-evenly  '>
                        <div className='text-4xl uppercase font-medium'>clicks :<span className='font-light'>Where Every Click Tells a Story</span></div>

                        <div className='bg-[#191b1c] text-gray-500  h-52  p-6 md:p-8 md:h-[22vw]  hover:bg-zinc-500 hover:text-black' >
                            <div className='text-sm md:text-xl h-20 md:h-[80%] overflow-y-auto md:overflow-y-hidden '>

                                Clicks is a dedicated platform for photographers to share their passion for capturing the world through their lenses.Allowing users to upload their
                                camera-captured images,receive feedback.Whether you're a professional photographer or an amateur with a keen eye, Clicks is your space to shine

                            </div>

                            <Link to={'https://clicks-8bzz.onrender.com'} target='_blank' className=' bg-p text-black p-4 tracking-wider mt-5  md:mt-0 uppercase'>clicks </Link>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects
