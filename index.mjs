import fs from 'fs';
import readline from 'readline';
// const yargs = require('yargs');
import path  from 'path';
import inquirer from 'inquirer';

const [filePath] = process.argv.slice(2)


// const options = yargs
// .usage('Usage: -p <path to file> ')
// .option('p', {
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

const question = async (query) => new Promise((resolve) => rl.question(query, resolve))

(async () => {
  const filePath = await question("введите путь до файла:")
  const encode = await  question("введите кадировку:")

  fs.readFile(filePath, encode, (err, data) => {
        if(err) {
          console.log(err)
        }
        console.log(data)
        rl.close()
      })
})()