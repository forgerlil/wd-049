const Counter = ({ id, count, addCounter, subtractCounter }) => {
  return (
    <>
      <button onClick={() => subtractCounter(id)}>-</button>
      <p>{count}</p>
      <button onClick={() => addCounter(id)}>+</button>
    </>
  );
};

export default Counter;
