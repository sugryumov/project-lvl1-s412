import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfRounds = 3;

const gameEngine = (description, game) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const gameDate = game();
    const question = car(gameDate);
    const correctAnswer = cdr(gameDate);
    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
