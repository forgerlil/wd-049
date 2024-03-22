import { useState, useEffect } from 'react';
import Instructions from './instructions/Instructions';
import Lightbulb from './components/Lightbulb';

export default function App() {
  const [lightsOn, setLightsOn] = useState(false);
  const [count, setCount] = useState(0);

  const turnLightsOn = () => {
    // console.log('Toggling the light');
    lightsOn ? setLightsOn(false) : setLightsOn(true);
    if (!lightsOn) setCount(count + 1);
    if (count >= 10) {
      alert('You have reached your daily limit');
    }

    // if (lightsOn) {
    //   setTimeout(() => {
    //     setLightsOn(false);
    //   }, 5000);
    // }
  };

  useEffect(() => {
    let timeoutId;

    if (lightsOn) {
      timeoutId = setTimeout(() => {
        setLightsOn(false);
      }, 7000);
    }

    return () => clearTimeout(timeoutId);
  }, [lightsOn]);

  console.log('Component is re-rendering');

  return (
    <div className='App'>
      <Instructions />
      <div className={'block ' + (lightsOn ? 'night' : '')}>
        <h1 style={{ color: lightsOn && 'white' }}>
          You turned on the bulb {count} times
        </h1>
        <button disabled={count >= 10} onClick={turnLightsOn}>
          {lightsOn ? 'Turn me off!' : 'Turn me on!'}
        </button>
        <div className='container'>
          <Lightbulb />
        </div>
      </div>
    </div>
  );
}
