// JS SCOPE
/*
How to modify the declaration of variables so that the console.log returns 4 in index.js?
*/
let myVar = 4;

function titi() {
  let myVar = 5;
}

titi();

console.log(myVar);

// JS Operator – Equals
/*
How do I get my code into the else?
*/
if (1 != true) {
  console.log('OK');
} else {
  console.log('NOK');
}

// JS Conditions – If/Else
/*
In the file index.js, write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output

to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

function greaterNum(num1, num2) {
  if (num1 > num2) {
    return `The greater number of ${num1} and ${num2} is ${num1}.`;
  } else if (num2 > num1) {
    return `The greater number of ${num1} and ${num2} is ${num2}.`;
  }
  // alternatively with ternaries
  // return num1 > num2
  //   ? `The greater number of ${num1} and ${num2} is ${num1}.`
  //   : `The greater number of ${num1} and ${num2} is ${num2}.`;
}

const resultOfGreaterNum1 = greaterNum(3, 4);
const resultOfGreaterNum2 = greaterNum(10, 1);

console.log(resultOfGreaterNum1);
console.log(resultOfGreaterNum2);

// JS Conditions – Switch
/*
Using the function in index.js, create a switch with 3 possibilites:
- if the color is blue, return the value "The color is blue"
- if the color is red, return the value "The color is red"
- if it's another color, return the value "It's not a color that I know"
*/

function myFavouriteColor(color) {
  switch (color) {
    case 'blue':
      return 'The color is blue';
    // break;
    case 'red':
      return 'The color is red';
    // break;
    default:
      return "It's not a color that I know";
  }
}

console.log(myFavouriteColor('blue'));
console.log(myFavouriteColor('magenta'));

// JS Date – Time and hour
/*
- Display the time (hh:mm) in the console.
- Display the day (mm.dd)
*/

let currentDate = new Date();

function formatDate(date) {
  return date > 9 ? date.toString() : `0${date}`;
}

let todaysDate = currentDate.getDate();
let todaysMonth = currentDate.getMonth() + 1;
let todaysYear = currentDate.getFullYear();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

console.log(`${formatDate(todaysMonth)}.${formatDate(todaysDate)}`);
console.log(`${formatDate(hours)}:${formatDate(minutes)}`);

// console.log(todaysDate);
// console.log(todaysMonth);
// console.log(todaysYear);

// JS Array – Init
/*
We have the values 4,3,5,8; put these values in an array and display in the console:
all the values
the first value
the length of the array
*/

const myArray = [4, 3, 5, 8];
console.log(myArray);
console.log('array first index', myArray[0]);
console.log('array length', myArray.length);

// JS Array – Sort
/*
We have the values 4,3,5,8; put these values in a array, sort this array and console.log() this array.
*/

const myArraySort = [4, 3, 5, 8];
// myArraySort.sort();
const sortedArray = myArraySort.toSorted();
console.log(myArraySort);
console.log(sortedArray);

// JS Loops – For
/*
On this array: ['one', 'two', 'three']
Make a for loop and, at each turn, display the value in the console.
*/
const myArrayForLoop = ['one', 'two', 'three'];

for (let i = 0; i < myArrayForLoop.length; i++) {
  console.log(myArrayForLoop[i]);
}

// JS Loops – ForEach
/*
On this array: ['one', 'two', 'three']
Make a forEach loop and, at each turn, display the value in the console.
*/

const myArrayForEach = ['one', 'two', 'three'];

myArrayForEach.forEach(function (element) {
  console.log(element);
});

myArrayForEach.forEach((element) => console.log(element));
