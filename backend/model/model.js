import mongoose from "mongoose";

const schema = new mongoose.Schema({
 name : String,
 age : Number,
 skill : String
});

const user = mongoose.model("user",schema)

export default user;
