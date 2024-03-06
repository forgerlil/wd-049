// Hoisting: functions can be called before declaration
// addWithOne(1);

function addWithOne(number) {
  // body of the function
  console.log(number + 1);
}

// Hoisting
// console.log(varVariable);
// console.log(letVariable);

var varVariable = 'Hello';
// console.log(varVariable);
let letVariable = 1;
const constVariable = true;

// Anonymous functions as function expressions
const viewportAlert = function () {
  alert('You clicked on the viewport!');
};

// Anonymous functions
document.querySelector('body').addEventListener('click', viewportAlert);

// Function returns
function evenOrOdd(number) {
  if (typeof number !== 'number') return 'Invalid value';

  return number % 2 === 0 ? 'even' : 'odd';
  // console.log('Nothing comes after the return');
}

const result1 = evenOrOdd(10);
const result2 = evenOrOdd('10');
// console.log(result1);
// console.log(result2);

// IIFE - Immediately Invoked Function Expression
// (function (value) {
//   console.log('I am an IIFE and I got this value: ' + value);
// })('Hello World');

// Multiple parameters
function makeSandwich(ingredient1, ingredient2, ingredient3) {
  return `My sandwich is made of ${ingredient1}, ${ingredient2} and ${ingredient3}.`;
}

const mySandwich = makeSandwich('toast');
// console.log(mySandwich);

// ES6 Functions

// ES5
function es5Fnc() {
  console.log(arguments);
}

// console.log(es5Fnc('first value', 'second value', 3, false));

// Always anonymous, known as Arrow functions
const myes6Func = (singleArgument) => {
  return 'Hello from ES6: ' + singleArgument;
};

// console.log(myes6Func('Its more succint'));

// Recursive functions

const factorial = (num) => {
  if (num <= 0) return 1;
  return num * factorial(num - 1);
};

// console.log(factorial(10));

// Objects

// Objects are a collection of key:value pairs

// const objectName = {
//   "key 1": 'value',
//   key2: 'another value',
//   key3: 'yet another value',
// };

const cybeleTheSnake = {
  name: 'Cybele',
  age: 8,
  species: ['ball python', 'royal python'],
  'is Venomous': false,
  checkForFood: () => console.log('Looking for food...'),

  flickerTongue() {
    console.log('Sssss....');
  },

  owner: {
    name: 'Lilian',
    age: 34,
    formerPets: ['dog', 'cat', 'fish', 'horse'],
    currentVideogame: {
      title: 'Diablo IV',
      releaseYear: 2023,
    },
  },
};

// console.log(cybeleTheSnake);

// Accessing Objects
// Dot notation
// console.log(cybeleTheSnake.name);
// console.log(cybeleTheSnake.age);
// cybeleTheSnake.flickerTongue();
// console.log(cybeleTheSnake.species[0]);
// console.log(cybeleTheSnake.owner.name);

// Bracket notation
const randomProperty = Math.random() > 0.5 ? 'name' : 'age';

// console.log(cybeleTheSnake['is Venomous']);
// console.log(cybeleTheSnake[randomProperty]);
// console.log(cybeleTheSnake.randomProperty);

cybeleTheSnake.age = 9;
cybeleTheSnake.hungry = true;
delete cybeleTheSnake.age;

// console.log(cybeleTheSnake.owner?.currentVideogame.title);
// console.log(cybeleTheSnake);

// Object destructuring

const {
  name,
  flickerTongue,
  hungry,
  owner: {
    currentVideogame: { title },
  },
} = cybeleTheSnake;

// console.log(title);
// flickerTongue();

// Copying objects

const student1 = {
  firstName: 'Bogdan',
  batch: 'wd#049',
  lectures: {
    week1: ['UX/UI'],
    week2: ['JavaScript basics', 'JS Functions', 'HOF'],
    week3: ['DOM Manipulation, Modules'],
  },
};

// Spread operator
const student2 = { ...student1, firstName: 'Adrianna' };
// student2.lectures.week1 = 'Hijacking the value';
// console.log(student2);
// console.log(student1);
