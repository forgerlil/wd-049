// console.dir((document.children[0].children[2].children[1].style.color = 'red'));

// GETTING ELEMENTS BY THE ID ATTRIBUTE

// const articleSecn = document.getElementById('articlesSection');
// const articleSecn = document.querySelector('#articlesSection');

// console.log(articleSecn);

// TARGET ELEMENT'S STYLE ATTRIBUTE (INLINE STYLING)
// articleSecn.style.backgroundColor = 'pink';

// CHANGE ELEMENT'S CLASS LIST

// console.log(articleSecn.classList);
// articleSecn.classList.add('bg-red-200');
// articleSecn.classList.remove('flex');
// articleSecn.classList.toggle('bg-red-200');

// CHANGING AN ELEMENT'S CONTENT
const h1 = document.querySelector('h1');

// h1.innerHTML = 'Hello world';

// XSS EXAMPLE (CROSS SERVER SCRIPTING)
const form = document.querySelector('form');
const input = document.querySelector('input');
const span = document.querySelector('#searchResult');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   span.innerHTML = input.value; // ❌
//   span.textContent = input.value; // ✅
// });

// console.log(h1.innerHTML);
// console.log(h1.innerText);
// console.log(h1.textContent);

// TARGETTING MULTIPLE ELEMENTS
// const cardByTag = document.getElementsByTagName('article');
// const cardByClass = document.getElementsByClassName('card');
// const cardsViaQuerySelector = document.querySelectorAll('.card');

// console.log(cardByTag);
// console.log(cardByClass);
// console.log(cardsViaQuerySelector);

// // cardsViaQuerySelector.forEach((card) => {
// //   card.classList.toggle('bg-red-200');
// // });

// TURN HTMLCOLLECTION/NODELIST INTO ARRAY
// const cardByTagAsArray1 = [...cardByTag];
// const cardByTagAsArray2 = Array.from(cardByTag);

// HTMLCOLLECTION VS NODELIST
// const cardByClass = document.querySelectorAll('.card');
// console.log(cardByClass);

// const newCard = document.createElement('article');
// newCard.classList.add('card', 'h-40', 'bg-red-400');
// document.body.appendChild(newCard);

// const cardByClassNew = document.querySelectorAll('.card');
// console.log(cardByClassNew);

// EVENT DRIVEN FUNCTIONALITY

const articleSecn = document.querySelector('#articlesSection');
const newCardBtn = document.querySelector('button');

newCardBtn.addEventListener('click', () => {
  const newArticle = document.createElement('article');
  newArticle.classList.add(
    'card',
    'w-96',
    'bg-gray-900',
    'hover:cursor-pointer'
  );

  // CREATED ELEMENTS CAN ALSO HAVE EVENT LISTENERS ATTACHED TO THEM
  // newArticle.addEventListener('click', () => {
  //   newArticle.classList.toggle('h-96');
  // });

  const cardImg = document.createElement('img');
  cardImg.src = 'https://picsum.photos/400/300';
  cardImg.alt = 'A random pretty image';

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'flex-col');

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = 'This was brought to you by JS';

  const cardText = document.createElement('p');
  cardText.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum';

  const cardBtn = document.createElement('button');
  cardBtn.classList.add('btn', 'btn-accent', 'w-fit', 'self-end');
  cardBtn.textContent = 'See more';

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);

  newArticle.appendChild(cardImg);
  newArticle.appendChild(cardBody);

  articleSecn.appendChild(newArticle);
});

// REMOVING AN ELEMENT
// articleSecn.children[1].remove();

console.dir(newArticle);
