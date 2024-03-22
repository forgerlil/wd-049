import { useState, useEffect } from 'react';

const Candle = () => {
  const [height, setHeight] = useState(50);

  // for making the candle smaller on click
  const burnCandle = () => setHeight((prev) => prev - 1);

  const newCandle = () => setHeight(80);

  useEffect(() => {
    const interval = setInterval(() => setHeight((prev) => prev - 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='block'>
      <div>
        <button onClick={newCandle}>Place new candle</button>
        <button onClick={burnCandle}>Make candle smaller</button>
      </div>
      <div className='block candleContainer'>
        {height >= 10 && (
          <div className='candle' style={{ height: `${height}%` }}>
            <div className='flame'>
              <div className='shadows' />
              <div className='top' />
              <div className='middle' />
              <div className='bottom' />
            </div>
            <div className='wick' />
            <div className='wax' />
          </div>
        )}
      </div>
    </div>
  );
};
export default Candle;
