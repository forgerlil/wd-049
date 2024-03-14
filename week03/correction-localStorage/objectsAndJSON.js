// You can model your todos with an array of objects!
// You can then loop over this array and add the properties of these elements
// as the content of your DOM elements.
// We can start with these hardcoded examples
const todoList = [
  {
    name: 'Groceries',
    done: false,
  },
  {
    name: 'Cutting hair',
    done: true,
  },
  {
    name: 'Buy eggs',
    done: false,
  },
];

// If in doubt, log :D
console.log(todoList);

// But eventually, all the todos should be stored more permanently, with the help of localStorage
// Since we will store it as a string following JSON standards, we can retrieve the todos in JSON
// format and then parse it into a JavaScript structure!
// const todoList = JSON.parse(localStorage.getItem('todos'));

// And once your event gets fired, you can add a new todo object to your array to use in your program
document.querySelector('#addToDo').addEventListener('click', () => {
  // Hardcoded here but you get the values of the input in your todo list instead ;)
  todoList.push({
    name: 'Take the dog out',
    done: false,
  });

  // localStorage doesn't get automatically updated. Remember to update it as well!
  // Since you want to store a complex data structure (an array with objects), it needs to be turned into a string somehow
  // But Array or Object.toString() flattens the data in a way that cannot be restored to its original shape :(
  // We instead turn our object to a string using JSON's format, with the help of JSON.stringify()
  localStorage.setItem('todos', JSON.stringify(todoList));
});
