import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';


//Register User
export const register=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        if(!name || !email || !password){
            return res.status(400).json({success:false,message:"Please fill all the fields"});
        }
        //check if user already exists
        const existingUser=await userModel.findOne({email});
        if(existingUser){
            return res.status(400).send({success:false,message:"User already exists"});
        }
        //hash password
        const salt= await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        //create new user
        const newUser=new userModel({name,email,password});
        await newUser.save();
        res.status(201).send({success:true,message:"User registered successfully",newUser});


    }catch(err){
        return res.status(500).send({success:false,message:"Falied to register",err});
    }
}

//Login user------------------
export const login=async()=>{
    const {email,password}=req.body;
    try{
        if(!email || !password){
            return res.status(400).json({success:false,message:"Please fill all the fields"});
        }
        //check if user already exists
        const existingUser=await userModel.findOne({email});
        if(!existingUser){
            return res.status(400).json({success:false,message:"User Not exists"});
        }
        const isMatch=await bcrypt.compare(existingUser.password,password);
        if(!isMatch)
        {
            return res.status(405).json({success:false,message:"Invalid Password"});
        }
        res.status(200).json({success:true,message:"Login successfully "})
    }catch(err)
    {
        res.status(500).json({success:false,message:"Falied to Login",err});
    }
}