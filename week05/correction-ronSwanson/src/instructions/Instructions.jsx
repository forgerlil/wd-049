const Instructions = () => {
  return (
    <div className='block'>
      <div className='goal'>
        <h1>Ron Swanson</h1>
        <picture>
          <source
            srcSet='https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif'
            type='image/gif'
            media='(prefers-reduced-motion: no-preference)'
          />
          <img
            src='https://assets-global.website-files.com/63851d467dc151a9f46a992b/638630e65ff3e232dfed5ef1_62717982fd85850f5976dc1e_Ron%2520swanson.jpeg'
            alt='Ron Swanson'
            width='500'
            height='500'
          />
        </picture>
        <b>Your goal</b>: Retrieve information from an API and display a new
        quote every 30 seconds.
      </div>
      <h3>Level 1</h3>
      <ul>
        <li>Retrieve a quote from the <a href='https://ron-swanson-quotes.herokuapp.com/v2/quotes' target='_blank'>API</a>.</li>
        <li>Change the quote every 30 seconds.</li>
      </ul>
      <div className='linkWrapper'>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
        >
          Using the fetch API
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/axios/axios?tab=readme-ov-file#exampl'
        >
          Data fetching with Axios
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://react.dev/learn/synchronizing-with-effects'
        >
          Synchronizing with Effects
        </a>
      </div>
    </div>
  );
};

export default Instructions;
