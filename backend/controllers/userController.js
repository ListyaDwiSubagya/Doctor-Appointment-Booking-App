import validator from 'validator'
import bycrypt from 'bcrypt'
import userMode from '../models/userModel.js'
import jwt from 'jsonwebtoken'

// API TO REGISTER USER
const registerUser = async (req, res) => {

    try {
        
        const {name, email, password} = req.body

        if (!name || !email || !password) {
            return res.json({success:false, message:"Missing Details"})
        }
        
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Enter a valid email"})
        }
        
        if (password.length < 8) {
            return res.json({success:false, message:"Enter a strong password"})
        }

        // hashing user password
        const salt = await bycrypt.genSalt(10)
        const hashPassword = await bycrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password:hashPassword
        }

        const newUser = new userMode(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        res.json({success:true, token})

    } catch (error) {
        toast.error(error.message)
        console.log({success:false, message:error.message});
    }

}

export {registerUser}