const express = require("express");

const app = express();

app.get('/hello', (req, res)=> {
  res.json({'name': 'ivan'});
})

app.get('/html', (req, res)=> {
  res.sendFile('./index.html');
})

app.get('/', (req, res)=> {
  res.sendStatus(200);
})
app.listen(3000, () =>  console.log('Server been started http://localhost:3000'))