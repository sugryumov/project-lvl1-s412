import { cons } from 'hexlet-pairs';
import gameEngine from '../index';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const isEven = number => number % 2 === 0;

const game = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};


export default () => gameEngine(description, game);
