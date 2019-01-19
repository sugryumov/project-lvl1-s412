import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const length = 10;

const game = () => {
  const startNumber = generateNum(1, 30);
  const progressionStep = generateNum(1, 30);
  const hiddenIndex = generateNum(1, length);

  let question = '';
  let correctAnswer = '';

  for (let i = 1; i <= length; i += 1) {
    if (hiddenIndex === i) {
      question += '.. ';
    } else {
      question += `${startNumber + i * progressionStep} `;
    }
    correctAnswer = String(startNumber + hiddenIndex * progressionStep);
  }

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, game);
