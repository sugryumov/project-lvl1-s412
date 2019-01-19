import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import generateNum from '../utils';

const description = 'What is the result of the expression?';
const minGenerateNum = 1;
const maxGenerateNum = 100;
const maxGenerateNumOperator = 3;

const game = () => {
  const leftOperand = generateNum(minGenerateNum, maxGenerateNum);
  const rightOperand = generateNum(minGenerateNum, maxGenerateNum);
  const operator = generateNum(minGenerateNum, maxGenerateNumOperator);

  let question = '';
  let correctAnswer = '';

  switch (operator) {
    case 1:
      question = `${leftOperand} + ${rightOperand}`;
      correctAnswer = leftOperand + rightOperand;
      break;
    case 2:
      question = `${leftOperand} - ${rightOperand}`;
      correctAnswer = leftOperand - rightOperand;
      break;
    default:
      question = `${leftOperand} * ${rightOperand}`;
      correctAnswer = leftOperand * rightOperand;
  }

  return cons(question, String(correctAnswer));
};

export default () => gameEngine(description, game);
