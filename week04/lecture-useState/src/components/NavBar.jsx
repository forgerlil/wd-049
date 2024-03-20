import { useState } from 'react';

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [userName, setUserName] = useState(null);

  let userName = null;

  console.log(userName);

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
                // setUserName();
                userName = null;
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
                  Math.random() > 0.5
                    ? (userName = 'Cahide')
                    : (userName = 'Dipali');
                  console.log(userName);
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
