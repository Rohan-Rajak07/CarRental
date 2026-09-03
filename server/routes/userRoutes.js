import express from 'express';
import {register,login, updateUser} from '../controllers/userController.js'
import { authMiddleware } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post("/register",register);
router.post("/login",login);

//UPDATE||PATCH
router.patch("/update/:id",authMiddleware,updateUser)


export default router;