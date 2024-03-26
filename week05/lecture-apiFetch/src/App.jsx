import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import DuckSection from './components/DuckSection';
import DebuggerDuck from './components/DebuggerDuck';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [ducks, setDucks] = useState([]);

  useEffect(() => {
    // FETCHING IN REACT WITH METHOD CHAINING
    fetch('https://duck-pond-server.cyclic.cloud/ducks')
      .then((httpResponse) => {
        console.log('fetch object', httpResponse);
        if (!httpResponse.ok)
          throw new Error(
            `Failed to fetch from API: response status of ${httpResponse.status}`
          );
        return httpResponse.json();
      })
      .then((finalResult) => setDucks(finalResult))
      .catch((error) => {
        setDucks([]);
        console.warn(error);
      });

    axios('https://duck-pond-server.cyclic.cloud/ducks')
      .then((axiosResponse) => {
        console.log('axios object', axiosResponse);
        setDucks(axiosResponse.data);
      })
      .catch((error) => console.warn(error));

    // FETCHING IN REACT WITH ASYNC/AWAIT
    // const fetchWrapper = async () => {
    //   try {
    //     const httpResponse = await fetch(
    //       'https://duck-pond-server.cyclic.cloud/ducks'
    //     );

    //     if (!httpResponse.ok)
    //       throw new Error(
    //         `Failed to fetch from API: response status of ${httpResponse.status}`
    //       );

    //     const finalResult = await httpResponse.json();

    //     setDucks(finalResult);
    //   } catch (error) {
    //     setDucks([]);
    //     console.warn(error);
    //   }
    // };

    // fetchWrapper();
  }, []);

  const newDuckPrompt = () => {
    const duckName = prompt("Choose your duck's name");
    const duckImg = prompt("Choose your duck's image");

    if (!duckName || !duckImg)
      return alert('Please give data about your new duck!');

    // const newDucks = [
    //   ...ducks,
    //   {
    //     id: crypto.randomUUID(),
    //     duckName,
    //     imgSrc: duckImg,
    //     clickEffect: () => alert('You clicked on the duck'),
    //   },
    // ];

    // setDucks(newDucks);

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
