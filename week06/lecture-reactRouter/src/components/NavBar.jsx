import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ loggedIn, setLoggedIn }) => {
  return (
    <nav>
      <ul className='flex gap-6 pr-10 justify-end text-lg font-semibold'>
        <li>
          <NavLink
            to='/'
            style={(classes) => ({
              color: classes.isActive && 'red',
            })}
            className='hover:cursor-pointer'
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to='/add-duck' className='hover:cursor-pointer'>
            Add new Duck
          </Link>
        </li>
        {loggedIn ? (
          <li onClick={() => setLoggedIn(false)}>Logout</li>
        ) : (
          <>
            <li>
              <Link to='/login' className='hover:cursor-pointer'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/register' className='hover:cursor-pointer'>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
