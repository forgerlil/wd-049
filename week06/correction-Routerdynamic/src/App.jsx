import { Link, Routes, Route } from 'react-router-dom';
import Instructions from './instructions/Instructions';
import Student from './components/Student';
import Results from './components/Results';

export default function App() {
  return (
    <div className='App'>
      <div className='Instructions'>
        <Instructions />
        <div className='block'>
          <nav>
            <Link className='link' to='/students/2'>
              Students #2
            </Link>
            <Link className='link' to='/results/john'>
              Results John
            </Link>
          </nav>
        </div>
        <div className='block'>
          <Routes>
            <Route path='/students/:id' element={<Student />} />
            <Route path='/results/:name' element={<Results />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
