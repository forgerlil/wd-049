import Instructions from './instructions/Instructions';
import WreckshipShelter from './components/WreckshipShelter';

export default function App() {
  // The following three variables can be moved to different files as you progress through the exercise.
  const cats = ['Tom', 'Olly', 'Oreo'];
  const dogs = ['Tabby', 'Billy', 'Leila'];
  const age = () => Math.floor(Math.random() * (10 - 1) + 1);

  return (
    <>
      <Instructions />
      <WreckshipShelter />
    </>
  );
}
