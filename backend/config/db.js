import mongoose from "mongoose"

const db = async () =>{
try {
await mongoose.connect("mongodb+srv://ajaj32868_db_user:ajaejas143@cluster0.qbz7lnt.mongodb.net/?appName=Cluster0")
console.log("connected")
} catch (err){
console.log(err)
}
}
export default db;
