const fs = require('fs');
const { Transform } = require('stream');

const ACCESS_LOG = './access.log'
// const data = fs.readFileSync('./access.log', 'utf-8')

// console.log(data)
// fs.readFile(ACCESS_LOG, 'utf-8' , (err:any, data: string) => {
//   console.log(data)
// })

const requests = [
  '127.0.0.1 - - [25/May/2021:00:07:17 +0000] "GET /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"',
  '127.0.0.1 - - [25/May/2021:00:07:24 +0000] "POST /baz HTTP/1.1" 200 0 "-" "curl/7.47.0"'
]

// fs.writeFile(ACCESS_LOG, requests[0] + '\n', { encoding : 'utf-8', flag: 'a'}, (err)=> {
//   if(err) {
//     console.log(err, 'error')
//   }
// })

// fs.appendFile(
//   ACCESS_LOG, requests[0] + '\n', { encoding : 'utf-8', flag: 'a'}, (err)=> {
//     if(err) {
//       console.log(err, 'error')
//     }
//   }
// )

// const readStream = fs.createReadStream(ACCESS_LOG, {
//   encoding:'utf-8',
//   highWaterMark:64,
// })

// readStream.on("data", (chunk) => {
// console.log(chunk)
// })

// const writeStream = fs.createWriteStream(ACCESS_LOG, {
//   encoding: 'utf-8',
//   flags: 'a'
// })

// requests.forEach((logString) => {
//   writeStream.write(logString = '\n')
// })
// writeStream.end()
const payedAccount = true

const readStream = fs.createReadStream(ACCESS_LOG)

const tStream = new Transform({
  transform(chunk, encoding, callback) {
    if(!payedAccount){
      const transform = chunk.toString().replace(/d+\.d+\.d+\.d+/g, '[Hidden IP]')
      this.push(transform)
    }else{
      this.push(chunk)
    }
  }
})

readStream.pipe(tStream).pipe(process.stdout)