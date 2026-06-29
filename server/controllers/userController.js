import userModel from "../models/userModel.js";


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
        const hashedPassword=await bcrypt.hash(password,10);
        //create new user
        const newUser=await userModel.create({
            name,
            email,
            password:hashedPassword
        });
        return res.status(201).send({success:true,message:"User registered successfully",newUser});


    }catch(err){
        return res.status(500).send({success:false,message:"Falied to register",err});
    }
}
//Hey Testing its is working or not..