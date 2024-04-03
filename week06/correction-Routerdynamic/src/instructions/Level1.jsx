const Level1 = () => {
  return (
    <>
      <h4>Creating and using dynamic parameters</h4>
      <ul>
        <li>
          The BrowserRouter is already imported for you in <b>main.js</b>.
        </li>
        <li>
          Create a component named <b>&lt;Student /&gt;</b> that will display{' '}
          <b>&quot;Hello [id from the parameter]!&quot;</b> and add it to the{' '}
          <b>&lt;App /&gt;</b> component.
        </li>
        <li>
          Create a second component named <b>&lt;Results /&gt;</b> that will
          display <b>&quot;No results for [name from the parameter]!&quot;</b>{' '}
          and add it to the <b>&lt;App /&gt;</b> component.
        </li>
        <li>
          The navigation is already created for you, take a moment and have a
          look on it.
        </li>
        <li>
          Now, create a <b>&lt;Routes /&gt;</b> component with two routes in it.
          One for each component (Student & Results).
        </li>
      </ul>
    </>
  );
};

export default Level1;
