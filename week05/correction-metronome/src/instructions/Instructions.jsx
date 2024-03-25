import { useState } from 'react';
import ExampleOutcome from './ExampleOutcome';
import Level1 from './Level1';
import Level2 from './Level2';
import Bonus from './Bonus';

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
    3: <Bonus />,
  };

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < Object.keys(componentMap).length
        ? prevComponent + 1
        : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };

  return (
    <div className='block'>
      <div className='goal'>
        <h1>The Metronome</h1>
        <p>
          Metronomes are used to help musicians practice by periodically
          emitting a ticking noise at a selected speed.
        </p>
        <b>Your goal</b>: Implement a working metronome with <b>useState</b> and{' '}
        <b>useEffect</b>.
        <ExampleOutcome />
      </div>
      <h3>
        Level {activeComponent} / {Object.keys(componentMap).length}
      </h3>
      <div className='levels example'>
        <button onClick={handleBack} hidden={activeComponent === 1}>
          {`< Level ${activeComponent - 1}`}
        </button>
        <button
          onClick={handleNext}
          hidden={activeComponent === Object.keys(componentMap).length}
        >
          {`Level ${activeComponent + 1} >`}
        </button>
      </div>
      {componentMap[activeComponent]}
      <div className='buttons'>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement#basic_usage'
        >
          Audio constructor
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks'
        >
          setInterval
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://devtrium.com/posts/dependency-arrays#what-is-a-dependency-array-used-for'
        >
          useEffect Dependency Array
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/queueing-a-series-of-state-updates'
        >
          Queueing State Updates
        </a>
      </div>
    </div>
  );
};

export default Instructions;
