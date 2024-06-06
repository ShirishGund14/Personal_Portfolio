import React, { useRef, useState } from 'react';
import MyImg from '../img/Myimg.png';
import Switchbutton from '../Components/Switchbutton';
import Navbar from '../Components/Navbar';
import { PiMusicNoteSimpleFill, PiMusicNoteSimpleLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import soundtrack from '../sound/soundtrack.mp3';
import keyboard from '../sound/key.mp3';

const Home = () => {
  const audioRef = useRef(null);
  const KeyBoardAudioRef = useRef(null);
  const [musicon, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.1); // Volume level from 0.0 to 1.0
  const [keyvolume,Setkeyvolume]=useState(false);

  const handlePlayMusic = () => {
    if (!musicon) {
      audioRef.current.play();
      setMusicOn(true);
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset playback position
      setMusicOn(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleKeyVolume=()=>{
     if(KeyBoardAudioRef.current){
      KeyBoardAudioRef.current.play();
     }
  }

  return (
    <div className='bg-[#040404] text-zinc-500 w-full h-screen p-10 relative overflow-hidden'>
      <div className='text-7xl md:text-9xl uppercase font-semibold'>Shirish</div>
      <div className='text-7xl md:text-9xl uppercase font-semibold'>Gund</div>
      <img src={MyImg} className='myimg w-full h-screen object-contain absolute -top-[0.5rem] md:-top-[5rem] sm:-left-5' />

      <button className='bg-p p-4 fixed text-black mt-8 z-[1000000]' onClick={handleKeyVolume} ><GiHamburgerMenu/></button>
      <button onClick={handlePlayMusic} className='bg-p p-4 right-[13rem]  z-[1000000] md:right-[86.4rem] fixed text-black mt-8'>
          {musicon ? <PiMusicNoteSimpleFill /> : <PiMusicNoteSimpleLight />}
        </button>
      {/* <Switchbutton/> */}

      <div className='flex justify-between '>

        <audio ref={audioRef} src={soundtrack} />
       
        <input id="volume" type="range" min="0" max="1" step="0.01" value={volume}
          className='text-p fixed w-[6rem] top-[12rem] md:top-[19rem] z-[1000000] '
          onChange={handleVolumeChange}
        />
      </div>

      <audio src={keyboard} ref={KeyBoardAudioRef}></audio>


      {/* {<Navbar/>} */}
    </div>
  );
};

export default Home;
