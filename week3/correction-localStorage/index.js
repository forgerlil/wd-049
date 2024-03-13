const forms = document.querySelectorAll('form');

forms.forEach((form) =>
  form.addEventListener('submit', (e) => e.preventDefault())
);

// Here are all DOM elements you need

const resultsDiv = document.querySelector('.results');
const keyInput = document.querySelector('.key');
const valueInput = document.querySelector('.value');
const removeInput = document.querySelector('.remove');
const storeBtn = document.querySelector('.store');
const showBtn = document.querySelector('.show');
const clearOneBtn = document.querySelector('.clearOne');
const clearAllBtn = document.querySelector('.clearAll');

// Add your code below

storeBtn.addEventListener('click', () => {
  if (!keyInput.value || !valueInput.value) {
    alert('Please fill both fields');
    return;
  }

  localStorage.setItem(keyInput.value, valueInput.value);
  keyInput.value = '';
  valueInput.value = '';
});

clearOneBtn.addEventListener('click', () => {
  if (!removeInput.value) return alert('Please select a key to remove');

  localStorage.removeItem(removeInput.value);
  removeInput.value = '';
});

clearAllBtn.addEventListener('click', () => {
  localStorage.clear();
});

showBtn.addEventListener('click', () => {
  // console.log(localStorage);
  // console.log(Object.keys(localStorage));
  // console.log(Object.values(localStorage));
  const getAllPs = document.querySelectorAll('p');
  getAllPs.forEach((p) => p.remove());

  const keyValues = Object.values(localStorage);

  Object.keys(localStorage).forEach((keyName, index) => {
    console.log(keyName);
    const currentValue = keyValues[index];
    const p = document.createElement('p');
    p.textContent = `Key: ${keyName}, Value: ${currentValue}`;
    resultsDiv.appendChild(p);
  });
  // for (let i = 0; i < localStorage.length; i++) {
  //   console.log(getItems(localStorage[i]));
  // }
});

// PASSING PARAMETERS TO A CALLBACK WITH ANOTHER CALLBACK
// clearOneBtn.addEventListener('click', () =>
//   clearOneHandler('This is my parameter')
// );

// function clearOneHandler(param1) {
//   console.log(param1);

//   if (!removeInput.value) return alert('Please select a key to remove');

//   if (condition) anotherFunction();

//   localStorage.removeItem(removeInput.value);
//   removeInput.value = '';
// }

// PASSING PARAMETERS TO A CALLBACK WITH CLOSURES
// clearOneBtn.addEventListener('click', clearOneHandler('This is my parameter'));

// function clearOneHandler(param1) {
//   const closureValue = param1;

//   return () => {
//     console.log(closureValue);
//     if (!removeInput.value) return alert('Please select a key to remove');

//     localStorage.removeItem(removeInput.value);
//     removeInput.value = '';
//   };
// }
