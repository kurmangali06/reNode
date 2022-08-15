import express from"express";
import bodyParser from"body-parser";

import ChatRouter from "./routes/chats"


const app = express();

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

app.get('/status', (req,res)=> res.render("ok"))

app.use('/chats', ChatRouter)


app.listen(5000, ()=> console.log('Server been started http://localhost:5000'))