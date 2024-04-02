import { useState } from 'react';
import exampleOutcome from './exampleOutcome.gif';
import exampleOutcome2 from './exampleOutcome2.gif';

const ExampleOutcome = () => {
  const [showExample, setShowExample] = useState(false);

  return (
    <div>
      <button onClick={() => setShowExample((prev) => !prev)}>
        {showExample ? 'Hide Example' : 'See example outcome'}
      </button>
      {showExample && (
        <div className='imgWrapper'>
          <img
            className='exampleImg'
            src={exampleOutcome}
            alt='Example outcome'
          />
          <img
            className='exampleImg'
            src={exampleOutcome2}
            alt='Example outcome'
          />
        </div>
      )}
    </div>
  );
};

export default ExampleOutcome;
