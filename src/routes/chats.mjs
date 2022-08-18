import express from "express";
import { Chats } from "../models/chats.mjs";

const router = express.Router();

router
.get("/", async (req, res) => {
const chats = await Chats.find();
res.json(chats);
})
.post("/", async (req, res, next) => {
await Chats.create(req.body, (err, newChats) => {
if (err) {
next(err);
}
res.status(201);
res.json(newChats);
});
})
.delete("/:id", async (req, res) => {
const deleted = await Chats.findByIdAndDelete(req.params.id);
res.status(200);
res.json(deleted);
})
.put("/:id", async (req, res) => {
const updateChats = await Chats.findByIdAndUpdate(req.params.id, req.body);
res.json(updateChats);
});

export default router;
