import computerNum, { quote } from './computerChoices.js';
import { favMovie, playOddsAndEvens } from './myChoices.js';
// import random from './computerChoices.js';

console.log('My favorite quote is:', quote);
console.log('My favorite movie is:', favMovie);

console.log(playOddsAndEvens(computerNum(), 3, 'odd'));
