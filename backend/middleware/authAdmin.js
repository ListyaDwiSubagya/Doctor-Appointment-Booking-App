import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin = async (req, res, next) => {

    try {

        const {addtoken} = req.headers
        if (!addtoken) {
            return res.json({success:false, message:"Not Authorized Login again"})
        }

        const token_decode = jwt.verify(addtoken, process.env.JWT_SECRET)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success:false, message:"Not Authorized Login again"})
        }

        next()

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

export default authAdmin