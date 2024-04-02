import { useEffect, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import DuckSection from './components/DuckSection';
import DebuggerDuck from './components/DebuggerDuck';
import { getAllDucks } from './lib/contentfulClient';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [ducks, setDucks] = useState([]);

  useEffect(() => {
    getAllDucks().then((allDucks) => setDucks(allDucks));
  }, []);

  const newDuckPrompt = () => {
    const duckName = prompt("Choose your duck's name");
    const duckImg = prompt("Choose your duck's image");

    if (!duckName || !duckImg)
      return alert('Please give data about your new duck!');

    fetch('https://duck-pond-server.cyclic.cloud/ducks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ duckName, imgSrc: duckImg }),
    })
      .then((httpResponse) => {
        if (!httpResponse.ok)
          throw new Error(
            `Failed to fetch from API: response status of ${httpResponse.status}`
          );

        httpResponse.json();
      })
      .then((finalResult) => {
        setDucks((currentDucks) => [...currentDucks, finalResult]);
      })
      .catch((error) => {
        setDucks([]);
        console.warn(error);
      });
  };

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Hero />
      <button
        className='btn btn-primary block mx-auto my-10'
        onClick={newDuckPrompt}
      >
        Add new Duck
      </button>
      <DuckSection ducks={ducks} />
      <DebuggerDuck />
      <Footer />
    </>
  );
};

export default App;
