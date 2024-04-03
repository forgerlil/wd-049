import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import DuckSection from '../components/DuckSection';

const Home = () => {
  const [ducks, setDucks] = useState([]);

  useEffect(() => {
    axios('https://duck-pond-server.cyclic.cloud/ducks')
      .then(({ data }) => setDucks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Hero />
      <DuckSection ducks={ducks} />
    </>
  );
};

export default Home;
