import React, { useRef, useState } from 'react';
import MyImg from '../img/Myimg.png';
import { PiMusicNoteSimpleFill, PiMusicNoteSimpleLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import soundtrack from '../sound/soundtrack.mp3';
import keyboard from '../sound/key.mp3';

const Home = () => {
  const audioRef = useRef(null);
  const KeyBoardAudioRef = useRef(null);
  const [musicon, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.1); // Volume level from 0.0 to 1.0

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

  const handleKeyVolume = () => {
    if (KeyBoardAudioRef.current) {
      KeyBoardAudioRef.current.play();
    }
  }

  return (
    <div className='bg-[#040404] text-zinc-500 w-full h-screen p-10 relative overflow-hidden'>
      <div className='text-7xl md:text-9xl uppercase font-semibold'>Shirish</div>
      <div className='text-7xl md:text-9xl uppercase font-semibold'>Gund</div>
      <img src={MyImg} className='myimg w-full h-screen object-contain absolute -top-[0.5rem] md:-top-[5rem] sm:-left-5' />

      <div className="fixed top-[12rem] md:top-[19rem] z-[1000000] flex flex-col items-center gap-2 ">
<div>
<button className='bg-p p-4 text-black' onClick={handleKeyVolume}>
          <GiHamburgerMenu />
        </button>
        <button onClick={handlePlayMusic} className='bg-p p-4 text-black'>
          {musicon ? <PiMusicNoteSimpleFill /> : <PiMusicNoteSimpleLight />}
        </button>
</div>
        <input id="volume" type="range" min="0" max="1" step="0.01" value={volume}
        className='text-p w-[6rem]'
        onChange={handleVolumeChange}
      />
      </div>

      <audio ref={audioRef} src={soundtrack} />
      <audio src={keyboard} ref={KeyBoardAudioRef}></audio>


    </div>
  );
};

export default Home;
