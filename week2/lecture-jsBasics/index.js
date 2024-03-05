// // Primitive data types
// 3;
// 2.71 - 42;
// Infinity - Infinity;
// NaN;

// ('This is a string with single quotes');
// 'This is a string with double quotes'`This is a string with backticks`;

// true false
// undefined
// null

// // Composite data types
// functions () {}
// [1, 2, 3]
// {}

// // Arithmetic Operators
// 4 + 3
// 4 - 3
// 4 * 3
// 4 / 3

// // Comparison Operators
// 4 > 3 // true
// 4 < 3 // false
// 4 >= 3 // true
// 4 <= 3 // false

// // Equality Operators

// // = is the ASSIGNMENT OPERATOR

// // Equality operator #1 ==
// 4 == 4 // true
// 4 == '4' // true
// 1 == true
// 4 != 3 // true
// 4 != '4' // false

// // Equality operator #2 === (Strict equality)
// 4 === 4 // true
// 4 === '4' // false
// 4 !== 3 // true

// 'hello' + ' ' + 'world' // string concatenation
// 'hello' + 4 // 'hello4'
// 'hello' + [] // 'hello'
// 'hello' + {} // 'hello[object Object]'

// // Logical operators

// true && true // true
// '1' && 4 // true
// '' // falsy
// 0 // falsy
// null // falsy
// 0 && true // false
// !true // false
// !'' // true

// Variables
var myVarVariable = 'Some important content here!';
let myLetVariable;
const myConstVariable = 0;

// console.log(myVarVariable);

myVarVariable = true;
// myConstVariable = null;

// Outputting values into the console
// console.log(1 + 1);
// console.log('content of myVarVariable:', myVarVariable);
// console.table(['Dipali', 'Javier', 'Patrick']);

// Conditionals
let myFavoriteNumber = 7;
if (myFavoriteNumber > 7) {
  console.log('My number is greater than 7');
} else if (myFavoriteNumber === 7) {
  // console.log('Your favorite number is 7. Lucky number.');
} else {
  console.log('Your favorite number should be greater than 7... just saying.');
  myFavoriteNumber = 8;
}

// console.log(myFavoriteNumber);

// if (myFavoriteNumber === 7)
//   console.log('Your favorite number is 7. We already established that.');

const myTernary =
  1 === '1'
    ? 'Effect if condition is true'
    : 'Effect if the condition is false';

// console.log(myTernary);

// Switch statements
const evolutionStone = 'Fire Stone';

// switch (evolutionStone) {
//   case 'Water Stone':
//     console.log('Eevee will evolve into Vaporeon');
//     break;
//   case 'Fire Stone':
//     console.log('Eevee will evolve into Flameon');
//     break;
//   case 'Thunder Stone':
//     console.log('Eevee will evolve into Jolteon');
//     break;
//   default:
//     console.log('This stone has no effect on Eevee');
// }

// Array basics
const myArray = [
  1,
  'hello',
  true,
  null,
  undefined,
  [1, 2, 3, 4],
  function () {},
];

// console.log(myArray[0]);
// console.log(myArray[3]);
// console.log(myArray[10]);
// console.log(myArray.length);
// console.log(myArray[myArray.length - 1]);

// myArray[0] = 'Hijacking the value here';

myArray.push(101010);
// console.log(myArray);
// console.log(myArray.length);
myArray.pop();
myArray.shift();
myArray.unshift([null, null, null]);
// console.log(myArray);
// console.log(myArray.length);

// console.log(myArray.indexOf('important message'));
// console.log(myArray.includes('hello'));
// console.log(myArray.join(' '));

// Functions

function mySpecialFunction(message1) {
  // body of the function
  console.log(typeof message1);
  if (typeof message1 !== 'string')
    return console.log('The message was not a string! Boo :(');

  console.log(`I was instructed to say: ${message1}`);
  return 3 + 3;
}

// const functionResult = mySpecialFunction('Hello World!'); // calling or invoking a function
// mySpecialFunction(1);
// mySpecialFunction(null);
// mySpecialFunction([1, 2, 3]);

// console.log(functionResult);

// Loops
// for (let i = 0; i <= 5; i++) {
//   // body of the loop
//   console.log(i);
// }

let startingPoint = 0;
while (startingPoint < 5) {
  console.log(startingPoint);
  Math.random() > 0.5 && startingPoint++;
}

// do {
//   console.log(startingPoint);
//   Math.random() > 0.5 && startingPoint++;
// } while (startingPoint < 5);

// Scope
// Global Scope, Function Scope and Block Scope
var myValue = 1;

function myFunction() {
  const myValue = 2;
  console.log(myValue);
}

myFunction();

if (1 == 1) {
  var conditionalValue = 'Hey hey';
}

var conditionalValue = null;
console.log(conditionalValue);
