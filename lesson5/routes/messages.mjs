import express from "express";
import { Messages } from "../models/messages.mjs";

const router = express.Router();

router
.get('/',async (req,res)=> {
  const messages = await Messages.find()
  res.json(messages);
})
.post('/', async (req,res)=> {
  try{
  const newMessage =  await Messages.create(req.body);
  res.json(newMessage);} catch (err) {
    res.status(500)
    res.send(err)
  }
})
  .get('/:chatId', async (req, res) => {
  const message = await Messages.find({chatId: req.params.id})
  res.send(message)
})
  .delete('/:messageId', async (req, res) => {
  const deleted = await Messages.findByIdAndDelete(req.params.id)
  res.json(deleted);
})
  .put('/:messageId', async (req, res) => {
  const updateMessages = await Messages.findByIdAndUpdate(req.params.id, req.body)
  res.json(updateMessagess)
  res.send('ok');
})

export default router;