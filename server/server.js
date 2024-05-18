import {app} from "./app.js";
import connectDb from "./utils/connectionDb.js";
import dotenv from "dotenv";

dotenv.config({path:"./config.env"})

connectDb(process.env.CONNECTION_DB)

const port=3002
const host="localhost"

app.listen(port,()=>console.log(`Servidor iniciado en http://${host}:${port}`))