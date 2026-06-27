import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan'
import {connectDb} from './config/Db.js'

//dotenv
dotenv.config()
connectDb();

const app=express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get("/",(req,res)=>{
    res.send("Hello World");
});

const PORT= process.env.PORT || 3000 ;
console.log(PORT);
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT} in ${process.env.DEV_MODE} Mode`);
});