import sharp from 'sharp'
import User from "../model/userModel.js"
import { putImageBucket } from '../utils/functionsS3.js'



export default async function updateUserController(req, res, next) {
    let newPath
    const lastName = req.body.lastName === "" ? "" : req.body.lastName

    if (req.file) {
        console.log("hola");
        const extension = req.file.originalname.split(".")[1]
        newPath = `${req.user.id}.${extension}`

        const imageProfile = await sharp(req.file.buffer).resize(1024, 1024, {
            fit: "cover"
        }).jpeg({ quality: 10 }).toBuffer()

        putImageBucket(imageProfile, newPath)
    }

    const currentUser = {
        name: req.body.name || req.user.name,
        lastName: req.body.lastName || lastName,
        photo: newPath || req.user.photo,
        email: req.body.email || req.user.email,
        links: req.body.links || req.user.links || []
    }


    const user = await User.findByIdAndUpdate(req.user.id, currentUser, { runValidators: true })


    res.status(200).json({
        status: "succes",
        user
    })
}