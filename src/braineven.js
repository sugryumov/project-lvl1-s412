import readlineSync from 'readline-sync';

const numberOfRounds = 3;
const isEven = number => number % 2 === 0;

const gameEven = () => {
  const greetingUser = '\nWelcome to the Brain Games!';
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  console.log(greetingUser);
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = Math.floor(Math.random() * 100);

    const answer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${answer}`);

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEven;
