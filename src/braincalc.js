import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const gameCalc = () => {
  const greetingUser = '\nWelcome to the Brain Games!';
  const description = 'What is the result of the expression?\n';
  console.log(greetingUser);
  console.log(description);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const leftOperand = Math.floor(Math.random() * 100);
    const rightOperand = Math.floor(Math.random() * 100);
    const operator = Math.floor(Math.random() * 3) + 1;

    let answer = '';
    let correctAnswer = '';

    switch (operator) {
      case 1:
        correctAnswer = leftOperand + rightOperand;
        answer = Number(readlineSync.question(`Question: ${leftOperand} + ${rightOperand} `));
        console.log(`Your answer: ${answer}`);
        break;
      case 2:
        correctAnswer = leftOperand - rightOperand;
        answer = Number(readlineSync.question(`Question: ${leftOperand} - ${rightOperand} `));
        console.log(`Your answer: ${answer}`);
        break;
      case 3:
        correctAnswer = leftOperand * rightOperand;
        answer = Number(readlineSync.question(`Question: ${leftOperand} * ${rightOperand} `));
        console.log(`Your answer: ${answer}`);
        break;
      // no default
    }

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameCalc;
