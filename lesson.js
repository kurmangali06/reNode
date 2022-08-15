const http = require("http");
const url = require("url");
const fs = require('fs');

// const server = http.createServer((req, res)=> {
  // res.end('hello2')

  // console.log("url", req.url);
  // console.log("method", req.method);
  // console.log("headers", req.headers);
  // res.writeHeader(200, "ok!" ,
  // {'test-header': 'test'});
  // res.end()
  // if(req.url === '/user') {
  //   res.end('user found')
  // } else {
  //   res.writeHead(404, 'User not found', {
  //     'test-header': 'test'
  //   })
  //   res.end('user not found')
  // }
  // if(req.method === "GET") {
  //   const {query} = url.parse(req.url, true)
  //   console.log(query)
  //   res.end('hello')
  // }
  // else if (req.method === "POST") {
  //   // res.writeHead(405, ' Method not allowed')
  //   // res.end("Method not allowed")
  //   let data = ''

  //   req.on('data', (chunk)=> data += chunk)
  //   req.on('end', () => {
  //     console.log('data', JSON.parse(data))
  //     res.writeHead(200, 'ok', {
  //       'Content-Type' : 'application/json'
  //     })
  //     res.end(data)
  //   })
  // }

  // const file = fs.readFileSync('./index.html')
  // res.writeHead(200, 'OK', {
  //   'Content-Type': "text/html"
  // })
  // res.end(file)

// })

// server.listen(5555, () => console.log('Server been started http://localhost:5555'))

const server = http.createServer((req, res)=>  {
  setTimeout(()=> {
    const file = fs.readFileSync('index.html')

    res.writeHead(200, 'ok', {
      'Content-Type': 'text/html'
    })

    res.end(file)
  }, 5000)
}).listen(5555, ()=>  console.log('Server been started http://localhost:5555'))