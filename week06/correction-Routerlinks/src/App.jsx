import { Link, NavLink } from 'react-router-dom';
import Instructions from './instructions/Instructions';

export default function App() {
  const activeStyles = (properties) => ({
    color: properties.isActive && 'red',
    borderColor: properties.isActive && 'red',
    fontWeight: properties.isActive && 'bold',
  });

  return (
    <div className='App'>
      <div className='Instructions'>
        <Instructions />
        <div
          // INLINE STYLING IN JSX
          // style={{ color: 'lime', border: '5px dotted blue' }}
          className='block'
        >
          <nav>
            <NavLink style={activeStyles} className='link' to='/dashboard'>
              Dashboard
            </NavLink>
            <NavLink style={activeStyles} className='link' to='/settings'>
              Settings
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
