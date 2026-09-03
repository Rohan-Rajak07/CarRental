import jwt from 'jsonwebtoken';

export const authMiddleware = async(req, res, next) => {

	try {
        const token = req.headers.authorization;
	    if(!token)return res.status(402).json({success:false,message: 'Token not found' });
		

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		 res.status(500).json({success:false,message: 'Not authorized' });
	}
};

export const adminMiddleware = async(req, res, next) => {

	try{
		const user=await userModel.findById(req.user.id);
		if(user.isAdmin!==true){
			return res.status(402).json({success:false,message:"unauthorized user" });
		}
		else{
			next();
		}
	}catch (error) {
		 res.status(500).json({success:false,message: 'Not Admin' })
	}
}

