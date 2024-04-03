import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import AddDuck from './pages/AddDuck';
import DebuggerDuck from './pages/DebuggerDuck';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        path='/'
        element={<MainLayout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
      >
        <Route index element={<Home />} />
        <Route path='/add-duck' element={<AddDuck />} />
        <Route path='/debugger-duck/:duckId' element={<DebuggerDuck />} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
