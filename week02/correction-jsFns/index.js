// JS Functions – Min/Max
/*
We have the values: 9,11,55,22
How do we find the minimum and maximum value? Display your result in the console.
*/

function findMinMax() {
  const numArray = [9, 11, 55, 22];
  const minValue = Math.min(...numArray);
  // console.log(minValue);
  const maxValue = Math.max(...numArray);

  console.log(
    `Minimum value is: ${minValue}, and maximum value is ${maxValue}`
  );
}

// findMinMax();

// JS Functions – SetTimeout
/*
Write a script that displays "hello" in the console after 2 seconds.
*/

// setTimeout(() => {
//   console.log('Hello!');
// }, 2000);

// JS Functions – SetInterval
/*
Write a script that displays "hello" in the console every 2 seconds.
*/

// const intervalId = setInterval(() => {
//   console.log('Hello, periodically!');
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 10000);

// JS Functions – ES5 to ES6
/*
ES5 to ES6
Transform the two functions in index.js into ES6 syntax (arrow functions)
*/

// Function 1
// function notify(name) {
//   console.log(`${name} is here`);
// }
const notify = (name) => {
  console.log(`${name} is here`);
};

// Function 2
// setTimeout(() => {
//   console.log('1000ms == 1 second');
// }, 1000);

// Do no edit
// notify('BOB');

// JS Functions – DRY - Don't repeat yourself
/*
Transform the code in index.js in order to simplify the code by using a function
*/

// document.querySelector('.names').innerHTML += 'Bob is here <br />';
// document.querySelector('.names').innerHTML += 'John is here <br />';
// document.querySelector('.names').innerHTML += 'Sarah is here <br />';

const names = ['Bob', 'John', 'Sarah'];

function addNames(name) {
  document.querySelector('.names').innerHTML += `${name} is here <br />`;
}

for (let i = 0; i <= 2; i++) {
  addNames(names[i]);
}

// Or with an array iterator
// names.forEach((name) => {
//   addNames(name);
// });

// JS Functions – Fizz Buzz
/*
FizzBuzz is a programming task, used in software developer job interviews.

If a number is a multiple of 3 the function returns fizz
If a number is a multiple of 5 the function returns buzz
If a number is a multiple of 3 AND 5 the function returns fizzbuzz

As a sequence it would be:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz

Create a function in index.js which takes a number and return fizz or buzz or fizzbuzz or the number.
*/

// function fizzbuzz(number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return 'Fizzbuzz';
//   } else if (number % 3 === 0) {
//     return 'Fizz';
//   } else if (number % 5 === 0) {
//     return 'Buzz';
//   } else {
//     return number;
//   }
// }

// for (let i = 1; i <= 45; i++) {
//   console.log(fizzbuzz(i));
// }

function fizzbuzz(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   result += '\nFizzbuzz';
    // } else if (i % 3 === 0) {
    //   result += '\nFizz';
    // } else if (i % 5 === 0) {
    //   result += '\nBuzz';
    // } else {
    //   result += `\n${i}`;
    // }
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        result += '\nFizzbuzz';
        break;
      case i % 3 === 0:
        result += '\nFizz';
        break;
      case i % 5 === 0:
        result += '\nBuzz';
        break;
      default:
        result += `\n${i}`;
    }
  }

  return result;
}

// console.log(fizzbuzz(45));
// console.log(fizzbuzz(30));

function fizzBuzz(number) {
  switch (true) {
    case number % 3 === 0 && number % 5 === 0:
      return 'FizzBuzz';
    case number % 3 === 0:
      return 'Fizz';
    case number % 5 === 0:
      return 'Buzz';
    default:
      return number.toString();
  }
}

// Testing the function from 1 to 20
// for (let i = 1; i <= 20; i++) {
//   console.log(fizzBuzz(i));
// }

// JS Functions – Fibonacci
/*
In mathematics, the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

The beginning of the sequence is thus:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

With a recursive function create the 10 first elements of this sequence.
*/

function fibonacci(num = 0) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// fibonacci(10); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let i = 0;
while (i < 10) {
  console.log(fibonacci(i));
  i++;
}
