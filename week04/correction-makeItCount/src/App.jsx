import { useState } from 'react';
import Instructions from './instructions/Instructions';
import Counter from './components/Counter';

export default function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
  ]);

  const addCounter = (id) => {
    const newCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    );
    setCounters(newCounters);
  };

  const subtractCounter = (id) => {
    const newCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, value: counter.value - 1 } : counter
    );
    setCounters(newCounters);
  };

  const addAll = () => {
    const newCounters = counters.map((counter) => ({
      ...counter,
      value: counter.value + 1,
    }));
    setCounters(newCounters);
  };

  const subtractAll = () => {
    const newCounters = counters.map((counter) => ({
      ...counter,
      value: counter.value - 1,
    }));
    setCounters(newCounters);
  };

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        {' '}
        {counters.map((counter) => (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Counter
              key={counter.id}
              id={counter.id}
              count={counter.value}
              addCounter={addCounter}
              subtractCounter={subtractCounter}
            />
          </div>
        ))}
        <button onClick={() => subtractAll()}>Decrease all</button>
        <button onClick={() => addAll()}>Increase all</button>
      </div>
    </div>
  );
}
