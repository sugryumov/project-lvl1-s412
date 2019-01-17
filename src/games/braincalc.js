import { cons } from 'hexlet-pairs';
import gameEngine from '../index';

const description = 'What is the result of the expression?\n';

const game = () => {
  const leftOperand = Math.floor(Math.random() * 100);
  const rightOperand = Math.floor(Math.random() * 100);
  const operator = Math.floor(Math.random() * 3) + 1;

  let question = '';
  let correctAnswer = '';

  switch (operator) {
    case 1:
      question = `${leftOperand} + ${rightOperand} `;
      correctAnswer = leftOperand + rightOperand;
      break;
    case 2:
      question = `${leftOperand} - ${rightOperand} `;
      correctAnswer = leftOperand - rightOperand;
      break;
    case 3:
      question = `${leftOperand} * ${rightOperand} `;
      correctAnswer = leftOperand * rightOperand;
      break;
    // no default
  }

  return cons(question, correctAnswer);
};

export default () => gameEngine(description, game);
