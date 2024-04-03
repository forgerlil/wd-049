import ExampleOutcome from './ExampleOutcome';
import Level1 from './Level1';

const Instructions = () => {
  return (
    <div className='block'>
      <div className='goal'>
        <h1>React Router: Dynamic</h1>
        <p>
          The React Router library allows us to mimic routing behaviour in our
          apps, by hijacking the native history API and using that to trigger
          components to mount and unmount depending on the chosen route.
        </p>
        <b>Your goal</b>: Handle dynamic parameter names in the url
        <ExampleOutcome />
      </div>
      <h3>Level 1 / 1</h3>
      <Level1 />
      <div className='linkWrapper'>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://reactrouter.com/en/main/route/route#dynamic-segments'
        >
          Dynamic url segments
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://reactrouter.com/en/main/hooks/use-params'
        >
          Using parameters with useParams()
        </a>
      </div>
    </div>
  );
};

export default Instructions;
