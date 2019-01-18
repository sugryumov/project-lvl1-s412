import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const game = () => {
  const firstElement = generateNum(1, 30);
  const stepProgression = generateNum(1, 30);
  const hiddenElement = generateNum(1, lengthProgression);

  let question = '';
  let correctAnswer = '';

  for (let i = 1; i <= lengthProgression; i += 1) {
    if (hiddenElement === i) {
      question += '.. ';
    } else {
      question += `${firstElement + i * stepProgression} `;
    }

    correctAnswer = firstElement + hiddenElement * stepProgression;
  }

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, game);
