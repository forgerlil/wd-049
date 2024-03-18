import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';

// CREATING ELEMENTS WITH DOM MANIPULATION
// document.createElement('div')

const mainElement = document.querySelector('#root');

// CREATING ELEMENTS WITH .createElement()
// const firstDiv = React.createElement(
//   'div',
//   { style: { backgroundColor: 'red' } },
//   'This is our first react element!'
// );

// CREATING ELEMENTS WITH JSX
// const firstDiv = (
//   <>
//     <h1 className='bg-red-200'>This is our first react element with JSX!</h1>
//     <p>Hello {userName}</p>
//     <label htmlFor='email'>Type in your email</label>
//     <input id='email' type='text' placeholder='Email' />
//   </>
// );

// console.log(firstDiv);

createRoot(mainElement).render(<App />);
