import sharp from 'sharp'
import User from "../model/userModel.js"


export default async function updateUserController(req, res, next) {
    let newPath
    const lastName=req.body.lastName===""?"" : req.body.lastName
    
    if (req.file) {
        
        const extension=req.file.originalname.split(".")[1]
        newPath=`uploads/${req.user.id}.${extension}`
        
        await sharp(req.file.buffer).resize(1024,1024,{
            fit:"cover"
        }).toFile(newPath,(err)=>{
            if(err)throw err
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
