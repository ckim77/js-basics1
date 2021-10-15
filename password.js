/// Assessment 1: Password

console.log('Welcome to the password validator tool.')


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter your password: ", function(password) {
    if (password.length >= 10) {
      console.log(String.raw`
      _  ____ _  _  ___ ___ ____ ____ ____ _   
      / \/ ___) )( \/ __) __|  __) ___) ___) \  
      \_/\___ ) \/ ( (_( (__ ) _)\___ \___ \_/  
      (_)(____|____/\___)___|____|____(____(_)  
      `);
    } else {
      console.log('Failure :(');
      reader.question("Please enter your password: ", function(password2) {
        if (password2.length >= 10) {
          console.log(String.raw`
          _  ____ _  _  ___ ___ ____ ____ ____ _   
          / \/ ___) )( \/ __) __|  __) ___) ___) \  
          \_/\___ ) \/ ( (_( (__ ) _)\___ \___ \_/  
          (_)(____|____/\___)___|____|____(____(_)  
          `);
        } else {
          console.log('Failure :(');
          reader.question('Please enter your password, an incorrect input will lock you from your account: ', function(password3) {
            if (password3.length >= 10) {
              console.log(String.raw`
              _  ____ _  _  ___ ___ ____ ____ ____ _   
              / \/ ___) )( \/ __) __|  __) ___) ___) \  
              \_/\___ ) \/ ( (_( (__ ) _)\___ \___ \_/  
              (_)(____|____/\___)___|____|____(____(_)  
              `);
            } else {
              console.log('Failure, your account has been locked.')
            }
          });
        }
      });
    }
  });



  
