const Level1 = () => {
  return (
    <>
      <h4>React Router from zero to hero</h4>
      <ul>
        <li>
          Install <b>react-router-dom</b>, then wrap your application component
          tree in it. We will stick to the <b>Browser Router</b> component, as
          the new data routers are a more advanced pattern.
        </li>
        <li>
          Create a component named <b>&lt;Students /&gt;</b>, that will display
          information about all students.
          <ul>
            <li>
              You can use the <b>getStudents</b> function from the{' '}
              <b>services/students.js</b> file. It returns a Promise that
              resolves to an array of 10 student objects.
            </li>
          </ul>
        </li>
        <li>
          Clicking on the name of a single student from the list should display
          details regarding that specific student. The URL should be updated
          accordingly to <b>/students/&lt;studentId&gt;</b>.
          <ul>
            <li>
              Since we are not using data routers, your Route component only
              need a path and element properties.
            </li>
            <li>
              You can use the <b>getSingleStudent</b> function from{' '}
              <b>services/students.js</b> file to retrieve one student based on
              their uuid. It returns a Promise that resolves to a single
              student.
            </li>
          </ul>
        </li>
        <li>
          If the URL matches the path of your all students route, make the
          navigation link color white!
        </li>
        <li>
          On the single student page, implement a &quot;Go back&quot; button.
          When clicked, it should return to the route with all students. This
          feature should <b>not</b> use a Link or NavLink.
        </li>
      </ul>
    </>
  );
};

export default Level1;
