const Bonus = () => {
  return (
    <>
      <h3>BONUS SECTION</h3>
      <h4>Refactoring</h4>
      <ul>
        <li>
          Use a different approach for getting or sending the data. In example,
          if you used the native fetch API, try Axios
        </li>
        <li>
          If you used <b>.then()</b> and <b>.catch()</b> methods to handle
          Promises, refactor it to <b>async/await</b> instead.
        </li>
      </ul>
    </>
  );
};

export default Bonus;
