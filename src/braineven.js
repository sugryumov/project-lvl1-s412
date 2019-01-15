import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('\nWelcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const generateNumber = Math.floor(Math.random() * 100);

    const answer = readlineSync.question(`Question: ${generateNumber} `);
    console.log(`Your answer: ${answer}`);

    const isEven = number => number % 2 === 0;
    const correctAnswer = isEven(generateNumber) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    if (answer === correctAnswer) {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEven;
