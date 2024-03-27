import { useEffect, useState } from 'react';
import Instructions from './instructions/Instructions';

const Quotes = ({ url }) => {
  // state to hold the eventual data coming from the api
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = () => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`${res.status}: Could not fetch data`);
          return res.json();
        })
        .then((data) => setQuote(data[0]))
        .catch((err) => console.error(err));
    };

    fetchQuote();

    const intervalId = setInterval(() => {
      console.log('Running the interval');
      fetchQuote();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{quote}</div>;
};

function App() {
  const [showQuote, setShowQuote] = useState(false);
  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <button onClick={() => setShowQuote((prev) => !prev)}>
          Show quotes
        </button>
        {showQuote && <Quotes url={url} />}
      </div>
    </div>
  );
}

export default App;
