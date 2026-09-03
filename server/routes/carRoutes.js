import express from 'express'
import { adminMiddleware, authMiddleware } from '../middleware/authMiddleware.js';
import { addCar } from '../controllers/carController.js';

const router=express.Router();

//Add Car||POST 
router.post("/addcar",authMiddleware,adminMiddleware,addCar)

export default router