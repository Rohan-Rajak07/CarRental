import carModel from "../model/carModel.js";

export const addCar=async(req,res)=>{
        try
        {
            const {name,brand,model,year,category,seats,transmission,fuelType,pricePerDay}=req.body;
            if(!name || !brand || !model || !year || !category || !seats || !transmission || !fuelType || !pricePerDay) {
                return res.status(400).json({success:false,message:"All fields are required"});
            }
            const car=new carModel({name,brand,model,year,category,seats,transmission,fuelType,pricePerDay})
            await car.save();
            res.status(201).json({success:true,message:"Car added successfully",car:newCar});

        }catch(err){
            res.status(500).json({success:false,message:"Falied to add car",err});
        }

}