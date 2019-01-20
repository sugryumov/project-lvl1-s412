import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';
const minStartNumber = 1;
const maxStartNumber = 30;
const minProgressionStep = 1;
const maxProgressionStep = 30;
const length = 10;

const game = () => {
  const startNumber = generateNum(minStartNumber, maxStartNumber);
  const progressionStep = generateNum(minProgressionStep, maxProgressionStep);
  const hiddenIndex = generateNum(0, length - 1);

  let question = '';
  let correctAnswer = '';

  for (let i = 0; i < length; i += 1) {
    if (hiddenIndex === i) {
      question += '.. ';
    } else {
      question += `${startNumber + i * progressionStep} `;
    }
  }
  correctAnswer = String(startNumber + hiddenIndex * progressionStep);

  return cons(question.trim(), correctAnswer);
};

export default () => gameEngine(description, game);
