import express from "express"
import routes from "../router/router.js";
import db from "../config/db.js"
import cors from "cors";
import dotenv from "dotenv"


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(5000)
