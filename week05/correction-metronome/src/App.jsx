import Instructions from './instructions/Instructions';
import Metronome from './components/Metronome';

export default function App() {
  return (
    <>
      <Instructions />
      <div className='block'>
        <Metronome />
      </div>
    </>
  );
}
