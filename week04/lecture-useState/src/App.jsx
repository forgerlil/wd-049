import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import DuckSection from './components/DuckSection';
import DebuggerDuck from './components/DebuggerDuck';

const App = () => {
  const user = 'Javier';

  const [ducks, setDucks] = useState([
    {
      id: crypto.randomUUID(),
      duckName: 'Mr. Quackers',
      imgSrc: 'https://m.media-amazon.com/images/I/51VXgNZFIoL._AC_SL1424_.jpg',
      clickEffect: () => alert('You clicked on the duck'),
    },
    {
      id: crypto.randomUUID(),
      duckName: 'HRM The Queen',
      imgSrc: 'https://m.media-amazon.com/images/I/51B1yl6SOkL._SL1000_.jpg',
      clickEffect: () => alert('You dare click on the queen???'),
    },
  ]);

  const newDuckPrompt = () => {
    const duckName = prompt("Choose your duck's name");
    const duckImg = prompt("Choose your duck's image");

    if (!duckName || !duckImg)
      return alert('Please give data about your new duck!');

    const newDucks = [
      ...ducks,
      {
        id: crypto.randomUUID(),
        duckName,
        imgSrc: duckImg,
        clickEffect: () => alert('You clicked on the duck'),
      },
    ];

    setDucks(newDucks);
  };

  return (
    <>
      <Header favoriteNumber={2} />
      <Hero />
      <DuckSection ducks={ducks} userName={user} />
      <DebuggerDuck setDucks={setDucks} />
      <Footer />
    </>
  );
};

export default App;
