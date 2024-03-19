import Instructions from './instructions/Instructions';
import Header from './components/Header';

export default function App() {
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        Insert your components here
        <Header />
      </div>
    </div>
  );
}
