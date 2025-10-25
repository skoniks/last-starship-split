const { createInterface } = require('readline');

const ask = (question) =>
  new Promise((resolve) => {
    const readline = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(question, (answer) => {
      readline.close();
      resolve(answer);
    });
  });

const isYes = (answer) => answer.toLowerCase() === 'y';

module.exports = { ask, isYes };
