/// Assessment 1: Password

console.log('Welcome to the password validator tool.')


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter your password: ", function(password) {
  let passTrim = password.trim()  
  if (passTrim.length >= 10) {
      console.log(String.raw`
      _  ____ _  _  ___ ___ ____ ____ ____ _   
      / \/ ___) )( \/ __) __|  __) ___) ___) \  
      \_/\___ ) \/ ( (_( (__ ) _)\___ \___ \_/  
      (_)(____|____/\___)___|____|____(____(_)  
      `);
      reader.close();
    } else {
      console.log('Your password has to be greater than 10 characters');
      reader.question("Please enter your password again: ", function(password2) {
        let passTrim2 = password2.trim()  
        if (passTrim2.length >= 10) {
          console.log(String.raw`
          _  ____ _  _  ___ ___ ____ ____ ____ _   
          / \/ ___) )( \/ __) __|  __) ___) ___) \  
          \_/\___ ) \/ ( (_( (__ ) _)\___ \___ \_/  
          (_)(____|____/\___)___|____|____(____(_)  
          `);
          reader.close();
        } else {
          console.log('Your password has to be greater than 10 characters');
          reader.question('Please enter your password, an incorrect input will lock you from your account: ', function(password3) {
            let passTrim3 = password3.trim()  
            if (passTrim3.length >= 10) {
              console.log(String.raw`
              _  ____ _  _  ___ ___ ____ ____ ____ _   
              / \/ ___) )( \/ __) __|  __) ___) ___) \  
              \_/\___ ) \/ ( (_( (__ ) _)\___ \___ \_/  
              (_)(____|____/\___)___|____|____(____(_)  
              `);
              reader.close();
            } else {
              console.log('Failure, your account has been locked.')
              reader.close();
            }
          });
        }
      });
    }
  });


  
