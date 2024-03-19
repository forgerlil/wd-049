import Instructions from './instructions/Instructions';
import SuperButton from './components/SuperButton';
import Search from './components/Search';
import CreatePost from './components/CreatePost';

export default function App() {
  return (
    <>
      <Instructions />
      <div className='block buttons'>
        <SuperButton
          btnClick={() => alert('I was clicked!')}
          text='I will take you to interesting places'
          alertText='Heh... I lied :)'
        />
        {/* <SuperButton
          btnClick={() => {
            console.log('This is logging something instead');
          }}
        />
        <SuperButton btnClick={() => prompt('Type in something here')} /> */}
      </div>
      <div className='block buttons'>
        <Search />
      </div>
      <div className='block buttons'>
        <CreatePost />
      </div>
    </>
  );
}
