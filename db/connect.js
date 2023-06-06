import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({path:'../.env'})
export const connection = async () => {mongoose.connect(process.env.MONGO_URI)}