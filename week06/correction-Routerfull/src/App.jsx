import Instructions from './instructions/Instructions';

export default function App() {
  return (
    <div className='App'>
      <div className='Instructions'>
        <Instructions />
        <div className='block'>
          <a className='link' href='#'>
            Home
          </a>
          <a className='link' href='#'>
            Students
          </a>
        </div>
        <div className='block'>Create your routing here! (Routes & Route)</div>
      </div>
    </div>
  );
}
