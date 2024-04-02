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
        <h1>React POST requests</h1>
        <p>
          Now that we explored how to get data from an API to read and display
          in our applications, it&apos;s time our applications <b>send data</b>{' '}
          over to the API to create a new resource!
        </p>
        <b>Your goal</b>: Send data to an API to create new resources and
        display the new resource in the viewport.
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
      <div className='linkWrapper'>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods'
        >
          HTTP request methods
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data'
        >
          Sending data with POST
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful'
        >
          Fetch error handling
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/axios/axios?tab=readme-ov-file#example'
        >
          Axios library
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function'
        >
          Async
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await'
        >
          Await
        </a>
      </div>
    </div>
  );
};

export default Instructions;
