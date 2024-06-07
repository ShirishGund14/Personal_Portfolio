import React, { useRef, useState } from 'react';
import MyImg from '../img/Myimg.png';
import { PiMusicNoteSimpleFill, PiMusicNoteSimpleLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import soundtrack from '../sound/soundtrack.mp3';
import keyboard from '../sound/key.mp3';
import Navbar from '../Components/Navbar';

const Home = () => {
  const audioRef = useRef(null);
  const keyBoardAudioRef = useRef(null);
  const [musicon, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [openNavBar, setOpenNavBar] = useState(false);

  const handlePlayMusic = () => {
    if (!musicon) {
      audioRef.current.play();
      setMusicOn(true);
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setMusicOn(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleKeyVolume = () => {
    if (keyBoardAudioRef.current) {
      keyBoardAudioRef.current.play();
      setOpenNavBar(true);
    }
  };

  const toggleNavBar = () => {
    if (keyBoardAudioRef.current) {
      keyBoardAudioRef.current.play();
    }
    setOpenNavBar(!openNavBar);
  };

  return (
    <div className='bg-[#040404] text-zinc-500 w-full h-screen p-10 relative overflow-hidden'>
      <div className='text-7xl md:text-9xl uppercase font-semibold'>Shirish</div>
      <div className='text-7xl md:text-9xl uppercase font-semibold'>Gund</div>
      <img src={MyImg} className='w-full h-screen object-contain absolute -top-[0.5rem] md:-top-[5rem] sm:-left-5' alt="Shirish Gund" />

      <div className="fixed top-[12rem] md:top-8 md:right-8 z-[1000000] flex flex-col items-center gap-2">
        <div>
          <button className='bg-p p-4 text-black' onClick={handleKeyVolume}>
            <GiHamburgerMenu />
          </button>
          <button onClick={handlePlayMusic} className='bg-p p-4 text-black'>
            {musicon ? <PiMusicNoteSimpleFill /> : <PiMusicNoteSimpleLight />}
          </button>
        </div>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          className='w-[6rem] accent-p h-1'
          onChange={handleVolumeChange}
        />
      </div>

      <audio ref={audioRef} src={soundtrack} />
      <audio ref={keyBoardAudioRef} src={keyboard}></audio>

      {openNavBar && <Navbar toggleNavBar={toggleNavBar} keyBoardAudioRef={keyBoardAudioRef} />}
    </div>
  );
};

export default Home;
