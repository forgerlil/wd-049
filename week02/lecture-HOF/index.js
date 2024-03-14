// Higher Order Function
const myOuterFunction = (cb) => {
  console.log(
    'I am a function that accepts another function, and executes it!'
  );
  Math.random() > 0.5 && cb();
};

const internalFunction1 = () => {
  console.log('Internal function #1');
};

const internalFunction2 = () => {
  alert('Hello browser!');
};

// myOuterFunction(internalFunction1);
// myOuterFunction(internalFunction2);

// Functions as return statements (closure)

const restaurantOven = (temperature) => {
  let ovenOn = false;

  const turnOn = () => {
    ovenOn = true;
    console.log('Oven is on');
  };

  const bake = (dish, time) => {
    if (!ovenOn) return console.log('Oven must be turned on first!');
    console.log(`Baking ${dish} at ${temperature} for ${time} minutes`);
  };

  return { turnOn, bake };
};

const myOven = restaurantOven(200);

// console.log(myOven);

// myOven.turnOn();
// myOven.bake('Lasagna', 60);

// Higher order array methods

// const myFakeForEach = (callback, array) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// };

// myFakeForEach(
//   (item, index, array) => console.log(item),
//   ['🍊', '🍎', '🍌', '🍊', '🍊', '🍓', '🍌']
// );

const fruits = ['🍊', '🍎', '🍌', '🍊', '🍊', '🍓', '🍌'];

// const resultOfForEach = fruits.forEach((myFruitOfChoice, index, array) => {
//   console.log(myFruitOfChoice);
//   console.log(index);
//   console.log(array);
// });

// console.log(resultOfForEach);

const resultOfMap = fruits.map((myFruitOfChoice, index, array) => {
  // console.log(myFruitOfChoice);
  // console.log(index);
  // console.log(array);
  if (myFruitOfChoice === '🍊') return '🧃';
  return '🍉'; // return intended content for that index in the array
});

// console.log(fruits);
// console.log(resultOfMap);

const donkeyKongBananaHoard = fruits.filter((currentItem) => {
  // console.log(`Current item is ${currentItem}`);
  return currentItem === '🍌'; // return something that gives true or false
});

// console.log(donkeyKongBananaHoard);

const findFirstBanana = fruits.find((item, index) => {
  // console.log(index);
  return item === '🍉'; // return something that gives true or false
});

// console.log(findFirstBanana);

const makeString = fruits.reduce((accumulator, currentItem) => {
  // console.log(accumulator);
  // console.log(currentItem);
  return accumulator + currentItem; // return value that will be assigned to the accumulator on next iteration
});

// console.log(makeString);

const getLength = fruits.reduce((accumulator, currentItem) => {
  // console.log(accumulator);
  // console.log(currentItem);
  return ++accumulator;
}, 0 /* initial value for the accumulator */);

// console.log(getLength);

const removeOranges = fruits.reduce((accumulator, currentItem) => {
  // console.log(accumulator);
  // console.log(currentItem);
  if (currentItem === '🍊') return accumulator;
  accumulator.push(currentItem);
  return accumulator;
}, []);

// console.log(removeOranges);

const setPlates = fruits.reduce((accumulator, currentItem) => {
  console.log(accumulator);
  console.log(currentItem);
  accumulator.push(currentItem);
  accumulator.push('🍽️');
  return accumulator;
}, []);

console.log(setPlates);
