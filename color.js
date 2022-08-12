
const readline = require('readline');
const rl =  readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("что это", (answer) => {
 console.log(`сапсибо! ${answer}`);

 rl.close()
})