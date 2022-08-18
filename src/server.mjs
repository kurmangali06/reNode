import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cowsay from "cowsay";

import "dotenv/config";

import ChatRouter from "./routes/chats.mjs";
import MessagesRouter from "./routes/messages.mjs";
import AuthRouter from "./routes/auth.mjs";
import { errorMiddleware } from "./middlewars/error.mjs";
import { verifyToken } from "./middlewars/tokenVerify.mjs";

mongoose
  .connect("mongodb://localhost:27017/NODE")
  .then(() => {
    console.log(
      cowsay.say({
        text: "Mongoose connected",
        e: "oO",
        T: "U ",
      })
    );
  })
  .catch((error) => console.log(error));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/status", (req, res) => res.render("ok"));

app.use("/chats", ChatRouter);
app.use("/messages", MessagesRouter);
app.use("/", AuthRouter);

app.use("/profile", verifyToken, (req, res) => {
  res.send("Im secured");
});

app.use(errorMiddleware);

app.all("*", (req, res) => {
  res.status(404).json({ error: 404 });
});

app.listen(5000, () =>
  console.log("Server been started http://localhost:5000")
);
