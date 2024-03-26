import NavBar from './NavBar';

const Header = ({ loggedIn, setLoggedIn }) => {
  return (
    <header className='bg-info-content'>
      <div className='navbar justify-between max-w-[1280px] mx-auto'>
        <div>
          <img
            src='https://img.freepik.com/premium-vector/cute-cartoon-rubber-duck-vector-illustration_773815-129.jpg?w=740'
            alt='rubber duck'
            className='mask mask-squircle w-16 ml-4 my-2'
          />
        </div>
        <div>
          <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
