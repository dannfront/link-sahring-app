import { log } from "console"
import User from "../model/userModel.js"
import fs from 'fs'

export default async function updateUserController(req, res, next) {
    let newPath
    const lastName=req.body.lastName===""?"" : req.body.lastName
    
    if (req.file) {
        const extension=req.file.originalname.split(".")[1]
        newPath=`uploads/${req.user.id}.${extension}`
        fs.rename(req.file.path,newPath,(err)=>{
            if(err)throw err
            console.log("succes");
        })
    }

    const currentUser = {
        name: req.body.name || req.user.name,
        lastName: req.body.lastName || lastName,
        email: req.body.email || req.user.email,
        photo: newPath || req.body.photo || req.user.photo,
        links: req.body.links || req.user.links || []
    }

    const user = await User.findByIdAndUpdate(req.user.id, currentUser, { runValidators: true })

    res.status(200).json({
        status: "succes",
        user
    })
}
