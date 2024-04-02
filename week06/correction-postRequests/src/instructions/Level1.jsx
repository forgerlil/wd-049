const Level1 = () => {
  return (
    <>
      <h4>Display the latest posts</h4>
      <ul>
        <li>
          The{' '}
          <a
            href='https://jsonplaceholder.typicode.com/'
            target='_blank'
            rel='noreferrer norelation'
          >
            JSON Typicode API
          </a>{' '}
          will serve us the latest posts. Have a look at the documentation on
          what to expect from the API.
        </li>
        <li>
          A component, <b>BlogPost.js</b>, is already given to you. Inside, you
          can display the content of each post coming from the API.
        </li>
        <li>
          <b>GET</b> the data from the API, and display it with the help of the{' '}
          <b>BlogPost</b> component.
        </li>
        <li>Remember to handle potential errors from the API.</li>
      </ul>
    </>
  );
};

export default Level1;
