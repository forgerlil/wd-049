import ExampleOutcome from './ExampleOutcome';
import Level1 from './Level1';

const Instructions = () => {
  return (
    <div className='block'>
      <div className='goal'>
        <h1>React Router: Basic</h1>
        <p>
          The React Router library allows us to mimic routing behaviour in our
          apps, by hijacking the native history API and using that to trigger
          components to mount and unmount depending on the chosen route.
        </p>
        <b>Your goal</b>: Setup a Router and create the first two Routes
        <ExampleOutcome />
      </div>
      <h3>Level 1 / 1</h3>
      <Level1 />
      <div className='linkWrapper'>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://reactrouter.com/en/main/routers/picking-a-router#using-v64-data-apis'
        >
          Choosing a router
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://reactrouter.com/en/main/router-components/browser-router'
        >
          Browser Router
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://reactrouter.com/en/main/components/routes#routes'
        >
          Routes and Route
        </a>
      </div>
    </div>
  );
};

export default Instructions;
