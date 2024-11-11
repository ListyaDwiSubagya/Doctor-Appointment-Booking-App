import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name:process.env.CLAUDINARI_NAME,
        api_key:process.env.CLAUDINARY_API_KEY,
        api_secret:process.env.CLAUDINARY_SECRET_KEY
    })
}

export default connectCloudinary