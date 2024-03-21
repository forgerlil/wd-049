import { useState, useEffect } from 'react';

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  const toggleLoggedIn = () => {
    setLoggedIn((currentValueOfState) => !currentValueOfState);
  };

  // useEffect with an empty dependency array [] only triggers once
  // when the component MOUNTS
  useEffect(() => {
    setTimeout(() => alert('Annoying cookies popup :D'), 2000);
  }, []);

  // useEffects are scheduled, and are only triggered once a component finishes
  // rendering!
  useEffect(() => {
    // setTimeout(() => alert('Annoying cookies popup :D'), 2000);
    console.log('I will only log after the rest of the component calculates!');
  }, []);

  console.log('Component has rendered or updated');

  // useEffect can track state updates by adding them to the dependency array
  // That way, the useEffect is triggered upon mount and whenever the tracked
  // state updates
  useEffect(() => {
    loggedIn
      ? (document.title = `Hello ${userName}`)
      : (document.title = 'The Duck Pond');
  }, [loggedIn]);

  // The callback given to an useEffect can RETURN a function. That function
  // gets called when the component is about to unmount.
  // This is usually used for clean-up effects, like clearing timers or
  // cancelling network interactions
  useEffect(() => {
    console.log('Starting the timer!');
    const timer = setInterval(() => console.log('Timer kicked in'), 2000);

    return () => {
      console.log('Component is about to leave the screen!');
      clearInterval(timer);
    };
  }, []);

  // STRICT MODE
  // Strict mode is a React component that is present during development (in main.jsx)
  // It mounts, unmounts and re-mounts every component in the application, which leads to
  // useEffects running twice
  // The aim of that is to help catch bugs in case effects are not being properly cleaned up
  // when a component leaves the screen! Strict mode is removed for production code.
  useEffect(() => {
    console.log('useEffect has kicked in during component mounting');

    return () => console.log('Component is unmounting!');
  }, []);

  return (
    <>
      <p className='mr-4'>Hello {userName || 'there'} </p>
      <nav>
        <ul className='flex gap-6 pr-10 justify-end text-lg font-semibold'>
          <li className='hover:cursor-pointer'>Home</li>
          <li className='hover:cursor-pointer'>Add new Duck</li>
          {loggedIn ? (
            <li
              className='hover:cursor-pointer'
              onClick={() => {
                setUserName();
                toggleLoggedIn();
              }}
            >
              Logout
            </li>
          ) : (
            <>
              <li
                className='hover:cursor-pointer'
                onClick={() => {
                  setUserName('Dipali');
                  toggleLoggedIn();
                }}
              >
                Login
              </li>
              <li
                className='hover:cursor-pointer'
                onClick={() => {
                  toggleLoggedIn();
                }}
              >
                Register
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
