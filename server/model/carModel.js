import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
	{
		name: { type: String, required: [true, "Car name is required"], trim: true },
		brand: { type: String, required: [true, "Car brand is required"], trim: true },
		model: { type: String, required: [true, "Car model is required"], trim: true },
		year: { type: Number, required: [true, "Car year is required"] },
		category: { type: String, required: [true, "Car category is required"], trim: true },
		seats: { type: Number, required: [true, "Number of seats is required"], min: 1 },
		transmission: {
			type: String,
			required: [true, "Transmission type is required"],
			enum: ["manual", "automatic"]
		},
		fuelType: {
			type: String,
			required: [true, "Fuel type is required"],
			enum: ["petrol", "diesel", "electric", "hybrid"]
		},
		pricePerDay: { type: Number,default:1000 },
		image: { type: String, trim: true },
		available: { type: Boolean, default: true }
	},
	{ timestamps: true }
);

const carModel=mongoose.model("car",carSchema);
export default carModel;
