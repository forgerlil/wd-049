const Level1 = () => {
  return (
    <>
      <h4>Setup React Router and create routing</h4>
      <ul>
        <li>
          The BrowserRouter is already imported for you in <b>main.js</b>, take
          a moment and have a look on it.
        </li>
        <li>
          Create a component named {'<Student>'} that will display{' '}
          <b>Hello you!</b> and add it to the {'<App>'} component. (Don&apos;t
          forget to import this new component in your App.js file)
        </li>
        <li>
          Create a second component named {'<Results>'} that will display{' '}
          <b>No results for now!</b> and add it to the {'<App>'} component.
          (Don&apos;t forget to import this new component in your App.js file)
        </li>
        <li>
          The navigation is already created for you, take a moment and have a
          look on it.
        </li>
        <li>
          Now, define your routing. You should create two routes:
          <ul>
            <li>/students shows the Students component</li>
            <li>/results shows the results component</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level1;
