import { useState, useEffect } from 'react';
import click1 from '/click1.wav';
import click2 from '/click2.wav';

const audioClick1 = new Audio(click1);
const audioClick2 = new Audio(click2);

const Metronome = () => {
  const [tempo, setTempo] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [measureBeats, setMeasureBeats] = useState(4);
  const [beatCounter, setBeatCounter] = useState(1);

  const handleStartStop = () => {
    setIsPlaying(!isPlaying);
  };

  // Steps 1 and 2
  // useEffect(() => {
  //   let timer;

  //   if (isPlaying) {
  //     timer = setInterval(() => {
  //       audioClick1.play();
  //     }, 60000 / tempo);
  //   }

  //   return () => clearInterval(timer);
  // }, [tempo, isPlaying]);

  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setInterval(() => {
        setBeatCounter((currentBeat) => {
          if (currentBeat % measureBeats === 0) {
            audioClick2.play();
          } else {
            audioClick1.play();
          }

          return (currentBeat + 1) % measureBeats;
        });
      }, 60000 / tempo);
    }

    return () => clearInterval(timer);
  }, [tempo, isPlaying]);

  return (
    <div className='metronome'>
      <div className='bpm-slider'>
        <div>{tempo} BPM</div>
        <input
          type='range'
          min='60'
          max='240'
          step='1'
          onChange={(e) => setTempo(+e.target.value)}
          value={tempo}
        />
      </div>
      <button onClick={handleStartStop}>{isPlaying ? 'Stop' : 'Start'}</button>
    </div>
  );
};

export default Metronome;
