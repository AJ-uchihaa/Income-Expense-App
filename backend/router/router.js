import express from "express";
import { sighUpp,logine,securePage } from "../controller/controller.js"
import {middleware} from "../auth/auth.js";

const routes = express.Router()

routes.post("/signUp",sighUpp)
routes.post("/login",logine)
routes.get("/authMiddleware",middleware,securePage)


export default routes;
