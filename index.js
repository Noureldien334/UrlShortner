import  express  from "express";
import dotenv from "dotenv";
import { connection } from "./db/connect.js";

dotenv.config({path: "./.env"})

const app = express();

const port = process.env.PORT;

const runServer = async () =>{
    try{
        await connection();
        console.log("Connected to Database")

        app.listen(port, () => {
            console.log("Running on Port ", port);
        })
    }catch(error){
        console.log(error)
    }
}

runServer()