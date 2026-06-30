const { createInterface } = require('readline');

const ask = (question, defaultAnswer = '') =>
  new Promise((resolve) => {
    const readline = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(question, (answer) => {
      readline.close();
      resolve(answer || defaultAnswer);
    });
  });

const isYes = (answer) => answer.trim().toLowerCase() === 'y';

module.exports = { ask, isYes };
