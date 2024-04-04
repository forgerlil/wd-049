import { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Instructions from './instructions/Instructions';
import SingleStudent from './components/SingleStudent';
import Students from './components/Students';
import { getStudents } from './services/students';

export default function App() {
  // We would have to fetch here if the API didn't serve a single student and we had to filter to find a specific student
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getStudents().then((data) => setData(data));
  // }, []);

  return (
    <div className='App'>
      <div className='Instructions'>
        <Instructions />
        <div className='block'>
          <NavLink className='link' to='/'>
            Home
          </NavLink>
          <NavLink className='link' to='/students'>
            Students
          </NavLink>
        </div>
        <div className='block'>
          <Routes>
            <Route path='/' element={<div>Welcome to the student list</div>} />
            <Route
              path='/students'
              element={<Students /*students={data}*/ />}
            />
            <Route
              path='/students/:uuid'
              element={<SingleStudent /*students={data}*/ />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
