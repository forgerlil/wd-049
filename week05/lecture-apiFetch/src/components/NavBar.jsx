import { useState } from 'react';

const NavBar = ({ loggedIn, setLoggedIn }) => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  const toggleLoggedIn = () => {
    setLoggedIn((currentValueOfState) => !currentValueOfState);
  };

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
                  setUserName('Lilian');
                  toggleLoggedIn();
                }}
              >
                Login
              </li>
              <li className='hover:cursor-pointer'>Register</li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
