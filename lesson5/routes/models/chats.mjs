import mongoose from "mongoose";

const { Schema, model } = mongoose;

const chatsSchema = new Schema({
chatName: {
type: String,
required: true,
unique: true,
},
});

const handle1100 = (error, _, next) => {
if (error.name === "MongoServerError" && error.code === 11000) {
next(new Error("There was a bublicate key error"));
} else {
next(error);
}
};

chatsSchema.post("save", handle1100);
chatsSchema.post("update", handle1100);
chatsSchema.post("findOneAndUpdate", handle1100);
chatsSchema.post("insertMany", handle1100);

export const Chats = model("Chats", chatsSchema, "Chats");
