
import express from'express';
const app = express();
import http from 'http';
import path from 'path';
const server = http.createServer(app);
import {Server} from "socket.io";
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'));
});
const userMap = {}
io.on('connection', (client) => {
  console.log("a user connceted",client.id);

  userMap[client.id] = {
    id: client.id
  }

  console.log(userMap)
  client.on('client-msg', (data) => {
    console.log(data)

    const payload = {
      message : data.message.split('').join("")
    }
    client.broadcast.emit('server-msg', payload)
    client.emit('server-msg', payload)
  } )

  client.on('disconnect', ()=> {
    console.log("disconnect")
    delete userMap[client.id]
  })
});



server.listen(3000, () => {
  console.log('listening on *:3000');
});