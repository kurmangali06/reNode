const fs = require('fs');

const file = fs.readFileSync('index.html', {
  encoding: 'utf-8'
})

console.log(file.toString());
fs.promises.readFile('index.html').then(console.log)

fs.readFile('index.html', (err: any, data:string) => {
if(err) {
  console.log(err, 'error')
}
console.log(data.toString())
})