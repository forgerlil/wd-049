import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import DuckSection from './components/DuckSection';
import DebuggerDuck from './components/DebuggerDuck';

// CREATING OUR FIRST COMPONENT
const App = () => {
  const user = 'Javier';

  const ducks = [
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
  ];

  return (
    <>
      <Header userName={user} favoriteNumber={2} />
      <Hero />
      <DuckSection ducks={ducks} userName={user} />
      <DebuggerDuck />
      <Footer />
    </>
  );
};

export default App;
