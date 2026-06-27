
import mongoose from "mongoose";

export const connectDb = async () => {
 try{
    const URI=process.env.MONGO_URI;
    const conn=mongoose.connect(URI)
    if(conn){
        console.log(`MongoDB Connected: ${mongoose.connection.host}`.bgMagenta.white);
    }
 }
 catch(err){
    console.log(`Error: ${err.message}`.red.underline.bold);
 }
}
