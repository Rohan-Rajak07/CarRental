import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const cookieOptions={
    httpOnly:true,
    secure:false,
    expiry:new Date(Date.now()+3*24*60*60*1000) //3 days
}


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
        const newUser=new userModel({name,email,password:hashedPassword});
        await newUser.save();
        const token=JWT.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.cookie("token",token,cookieOptions);
        res.status(201).send({success:true,message:"User registered successfully",token,newUser});


    }catch(err){
        return res.status(500).send({success:false,message:"Falied to register",err});
    }
}

//Login user------------------
export const login=async(req,res)=>{
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
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch)
        {
            return res.status(405).json({success:false,message:"Invalid Password"});
        }
        const token=JWT.sign({id:existingUser._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.cookie("token",token,cookieOptions);
        res.status(200).json({success:true,message:"Login successfully",token})
    }catch(err)
    {
        res.status(500).json({success:false,message:"Falied to Login",err});
    }
}

export const updateUser=async(req,res)=>{
    try
    {
        const {id}=req.params;
        if(!id) return res.status(400).json({success:false,message:"User not found"});

        const data=req.body;
        const user=await userModel.findByIdAndUpdate(id,{$set:data},{returnOriginal:false});
        res.status(200).json({success:true,message:"User updated successfully",user});

    }catch(err)
    {
        res.status(500).json({success:false,message:"Falied to Update",err})
    }
}