// JS DOM – OnClick
/*
We want to redirect the user to https://getbootstrap.com when they click on this button.
*/

// const btn = document.getElementById('button');
const btn = document.querySelector('button');
let redirect = 'https://getbootstrap.com';

btn.addEventListener('click', () => {
  open(redirect, '_blank');
});

// JS DOM – Conditional OnClick
/*
We want to redirect the user to https://getbootstrap.com, only when they clicks on the button with the redirect class.
*/

// const button = document.querySelector('.redirect');
// getElementsByClassName ALWAYS RETURNS A HTMLCOLLECTION
const button = document.getElementsByClassName('redirect');

button[0].addEventListener('click', () => {
  location.href = redirect;
});

// JS DOM – OnKeyUp
/*
We want to display in the console the value of the input at each new letter.
*/

const nameTestBox = document.querySelector('input');

nameTestBox.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log(event.target.value);
});

// JS DOM – OnSubmit
/*
Display an alert if the form is empty when the form is submitted.
*/

const form = document.querySelector('#onsubmit-form');
const submit = document.getElementById('onsubmit-btn');
const textBox = document.getElementById('onsubmit-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.dir(e.target.children[0]);
  if (textBox.value.length < 1) return alert('You must enter something');
  console.log('You wrote something on the input');
  // Since we take over the submit, it's important to clear the input content for better user experience
  textBox.value = '';
  // console.log(e);
});

// submit.onclick = function () {
// };

// JS DOM – CSS With JS
/*
- On the click on the logo, create an alert with alert('system on')
- Instead of the alert, change the background of the screen with the code #444
- In addition of the background, insert inside the h1 the text Hello World!
*/

const powerBtn = document.getElementById('logo');
const screen = document.querySelector('.screen');
const greeting = document.querySelector('h1');

powerBtn.addEventListener('click', () => {
  // if the background color has any value (empty strings are falsy), reset it to have no value
  if (screen.style.backgroundColor) {
    screen.style.backgroundColor = '';
    greeting.innerText = '';
  } else {
    // Otherwise, add a grey background and some text to the elements
    screen.style.backgroundColor = '#444';
    greeting.innerText = 'Hello there!';
  }
});
