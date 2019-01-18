import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const minGenerateNum = 1;
const maxGenerateNum = 100;

const game = () => {
  const numberOne = generateNum(minGenerateNum, maxGenerateNum);
  const numberTwo = generateNum(minGenerateNum, maxGenerateNum);

  const question = `${numberOne} ${numberTwo}`;

  const gcd = (numOne, numTwo) => {
    if (numTwo === 0) {
      return numOne;
    }

    return gcd(numTwo, numOne % numTwo);
  };

  const correctAnswer = gcd(numberOne, numberTwo);

  return cons(question, correctAnswer);
};


export default () => gameEngine(description, game);
