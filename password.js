/// Assessment 1: Password

console.log('Welcome to the password validator tool.')

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter your password: ", function(password) {
    if (password.length >= 10) {
      console.log("Success!");
    } else {
      console.log('Failure, please try again.');
    }
  });

