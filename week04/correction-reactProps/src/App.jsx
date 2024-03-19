import Instructions from './instructions/Instructions';
import Header from './components/Header';
import Multiple from './components/Multiple';
import Cake from './components/Cake';

export default function App() {
  let title = 'React is amazing!';
  let cakeFn = () => console.log('Piece of cake');

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        Insert your components here
        <Header title={title} />
        <Cake cake={cakeFn} />
        <Multiple number1={4} number2={10} />
        <br />
        <Multiple number1={1} number2={5} />
      </div>
    </div>
  );
}
