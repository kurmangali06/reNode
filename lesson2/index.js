const fs = require('fs');
const readline = require('readline');
const yargs = require('yargs');
const path = require('path');
import inquirer from 'inquirer';


const [filePath] = process.argv.slice(2);


// const options = yargs
// .usage('Usage: -p <path to file>')
// .options('p', {
//   alias: 'path',
//   describe: 'Path  to file',
//   type: 'string',
//   demandOption: true,
// }).argv

// fs.readFile(options.p, 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err, 'error')
//     return
//   }
//   console.log(data)
// })

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// rl.question("введите путь до файла:", (filePath) => {
//   fs.readFile(filePath, 'utf-8', (err, data) => {
//     if(err) {
//       console.log(err)
//     }
//     console.log(data)
//     rl.close()
//   })
// })

// const question = async (query) => 
//   new Promise((resolve) => rl.question(query, resolve));

// (async () => {
//   const filePath = await question("введите путь до файла:");
//   const encode = await  question("введите кадировку:");

//   fs.readFile(path.join(__dirname, filePath), encode, (err, data) => {
//         if(err) {
//           console.log(err);
//         }
//         console.log(data);
        
//       })
//       rl.close();
// })();

const executionDir = process.cwd();

const list = fs.readFileSync('./')

console.log(list)

// inquirer.prompt([{
//   name: 'file',
//   type: 'list',
//   message: 'выберите файл для чтения',
//   choices: []
// }])