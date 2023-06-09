import  express  from "express";
import dotenv, { parse } from "dotenv";
import { connection } from "./db/connect.js";
import parseProjection from "mongoose/lib/helpers/projection/parseProjection.js";
import bodyParser from "body-parser";
import { userRouter } from "./src/routes/user.routes.js";
import { shortLinkRouter } from "./src/routes/shortLink.routes.js";
import cors from 'cors';

dotenv.config({path: "./.env"})

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(bodyParser.json())
app.use(userRouter)
app.use(shortLinkRouter)

const runServer = async () =>{
    try{
        await connection(process.env.MONGO_URI);
        console.log("Connected to Database")

        app.listen(port, () => {
            console.log("Running on Port ", port);
        })
    }catch(error){
        console.log(error)
    }
}

runServer()