const NavBar = () => {
  // logic or variables that are relevant for the navbar only
  return (
    <nav>
      <ul className='flex gap-6 pr-10 justify-end text-lg font-semibold'>
        <li className='hover:cursor-pointer'>Home</li>
        <li className='hover:cursor-pointer'>Add new Duck</li>
        <li className='hover:cursor-pointer'>Login</li>
        <li className='hover:cursor-pointer'>Register</li>
      </ul>
    </nav>
  );
};

export default NavBar;
