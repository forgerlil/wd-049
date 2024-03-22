import Instructions from './instructions/Instructions';
import MyTabs from './components/MyTabs';

export default function App() {
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <MyTabs />
      </div>
    </div>
  );
}
