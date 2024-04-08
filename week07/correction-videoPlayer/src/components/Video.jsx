import { useState, useRef } from 'react';
import { FaPlay, FaVolumeUp, FaExpandArrowsAlt, FaPause } from 'react-icons/fa';
import { formatTime } from '../utils/formatTime';

const Video = ({ currentVideo }) => {
  const videoRef = useRef(null);
  const timeSliderRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [totalTime, setTotalTime] = useState('00:00');

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
    videoRef.current?.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  };

  const handleLoad = () => {
    timeSliderRef.current.max = videoRef.current?.duration;
    volumeSliderRef.current.value = videoRef.current?.volume;
    const getFormattedTime = formatTime(videoRef.current?.duration);
    setTotalTime(getFormattedTime);
  };

  const handleTimestamp = () => {
    timeSliderRef.current.value = videoRef.current.currentTime;
    const getFormattedTime = formatTime(videoRef.current.currentTime);
    setCurrentTime(getFormattedTime);
  };

  const handleSkip = (e) => {
    videoRef.current.currentTime = e.target.value;
    const getFormattedTime = formatTime(videoRef.current?.currentTime);
    setCurrentTime(getFormattedTime);
  };

  const handleVolume = (e) => {
    videoRef.current.volume = e.target.value;
  };

  const handleFullScreen = async () => {
    try {
      videoRef.current.requestFullscreen();
      // videoRef.current.requestPictureInPicture();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className='w-full aspect-video'
        src={currentVideo.sources}
        onLoadedData={handleLoad}
        onTimeUpdate={handleTimestamp}
      ></video>
      <div className='flex gap-1 items-center text-white'>
        <button
          className='bg-accent p-4 rounded-lg'
          aria-label='play pause toggle'
          onClick={handlePlayPause}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className='text-lg font-semibold ml-6 my-2 flex-1 text-right'>
          <input
            ref={timeSliderRef}
            id='running-time-slider'
            className='range range-accent'
            type='range'
            defaultValue='0'
            min='0'
            onChange={handleSkip}
          />
          {currentTime} / {totalTime}
        </div>
        <div className='text-xl ml-6 flex items-center gap-3'>
          <div className='hover:cursor-pointer'>
            <FaVolumeUp />
          </div>
          <input
            ref={volumeSliderRef}
            id='volume-slider'
            type='range'
            min='0'
            max='1'
            step='.05'
            defaultValue='0.5'
            className='range range-xs w-28'
            onChange={handleVolume}
          />
        </div>
        <div
          className='bg-accent p-4 rounded-lg hover:cursor-pointer'
          onClick={handleFullScreen}
        >
          <FaExpandArrowsAlt />
        </div>
      </div>
      <h2 className='text-3xl mt-4'>
        {currentVideo.title} - {currentVideo.subtitle}
      </h2>
    </>
  );
};

export default Video;
