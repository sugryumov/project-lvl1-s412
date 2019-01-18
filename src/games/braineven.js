import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import generateNum from '../utils';


const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const minGenerateNum = 1;
const maxGenerateNum = 100;

const game = () => {
  const question = generateNum(minGenerateNum, maxGenerateNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, game);
