import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema({
email: {
type: String,
required: true,
unique: true,
},
password: {
type: String,
required: true,
},
});

userSchema.pre("save", async function (next) {
const hash = await bcrypt.hash(this.password, 10);
this.password = hash;
next();
});

userSchema.methods.isValidPassword = async function (password) {
const compare = await bcrypt.compare(password, this.password);
return compare;
};

export const User = model("User", userSchema, "User");
