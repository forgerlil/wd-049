import quote from './myChoices.js';

console.log(quote);

const selectNumber = () => {
  return Math.round(Math.random() * 5);
};

export { quote };
export default selectNumber;
