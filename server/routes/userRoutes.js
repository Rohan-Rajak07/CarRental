import express from 'express';
import {} from '../controllers/userController.js'

const router=express.Router();

router.post("/register",register);


export default router;