import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minGenerateNum = 1;
const maxGenerateNum = 100;
const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const game = () => {
  const number = generateNum(minGenerateNum, maxGenerateNum);

  const question = number;
  const correctAnswer = isPrime(number);

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, game);
