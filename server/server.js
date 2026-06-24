import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan'

//dotenv
dotenv.config()

const app=express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000");
});