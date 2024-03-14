import { promptMessages } from './promptMessages.js';

export let commentCounter = 0;

export const addToCounter = () => {
  ++commentCounter;
  console.log(`The total comments are at: ${commentCounter}`);
};

const addComments = () => {
  const studentAnswer = prompt(
    promptMessages[Math.floor(Math.random() * promptMessages.length)]
  );

  const p = document.querySelector('p');
  p.style = '';
  p.classList.add(
    'bg-slate-900',
    'text-white',
    'p-2',
    'rounded-xl',
    'mt-4',
    'break-words'
  );

  p.textContent = studentAnswer;

  addToCounter();

  const commentSection = document.querySelector('#commentSection');
  commentSection.appendChild(p);
};

export default addComments;
