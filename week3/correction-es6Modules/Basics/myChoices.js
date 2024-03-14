const quote = 'As long as there is a will, there is a way';

const favMovie = {
  title: 'Ladykillers',
  year: 2004,
  director: ['Joel Cohen', 'Ethan Cohen'],
  genre: 'Black comedy',
};

export function playOddsAndEvens(num1, num2, choice) {
  const sum = num1 + num2;
  if (
    (sum % 2 === 0 && choice === 'even') ||
    (sum % 2 !== 0 && choice === 'odd')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

export { favMovie };
export default quote;
