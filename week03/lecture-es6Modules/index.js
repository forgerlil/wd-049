// import * as users from './studentList.js';
import loadUsers, { someMoreStudents } from './studentList.js';
import addCommentToSection, {
  commentCounter,
  addToCounter,
} from './commentSection.js';

// commentCounter = 1;
console.log(commentCounter);

// console.log(users.default);
// console.log(users.someMoreStudents);

// users.someMoreStudents = 'Trying to override the student list';

const loadStudentsBtn = document.querySelector('.loadUsers');
const addCommentBtn = document.querySelector('.showPrompt');
const fakeCommentBtn = document.querySelector('.fakeComment');

loadStudentsBtn.addEventListener('click', loadUsers);
addCommentBtn.addEventListener('click', addCommentToSection);
fakeCommentBtn.addEventListener('click', addToCounter);
