import jwt from "jsonwebtoken"
import util from "util"
import User from "../model/userModel.js";

function sendToken(user,res,req,id) {

    const token= jwt.sign({ id: id }, process.env.SECRET_JWT_TOKEN, {
        expiresIn: process.env.EXPIRE_IN
    })

    const cookieOptinos={
        expires:new Date(Date.now()+process.env.EXPIRE_COOKIE_IN*24*60*60*1000),
        httpOnly:true,
        secure:req.secure||req.headers['X-Forwarded-Proto']==='https'
    }
    
    res.cookie('jwt',token,cookieOptinos)

    user.password=undefined

    res.status(200).json({
        status:"succes",
        token,
        user
    })
}

export async function auth(req, res, next) {
    try {
        let token
        if (req.headers.authorization && req.get("authorization").startsWith("Bearer")) {
            token = req.get("authorization").split(" ")[1]
        }else if(req.cookies.jwt){
            token=req.cookies.jwt
        }

        if (!token) throw new Error("Token invalid")

        const decoded = await util.promisify(jwt.verify)(token, process.env.SECRET_JWT_TOKEN)

        const user = await User.findById(decoded.id)

        if (!user) throw new Error("user is not found")

        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

export async function loginController(req, res, next) {
    try {
        const { email, password } = req.body

        if (!email || !password) throw new Error("password and email are required")

        const user = await User.findOne({ email }).select("password")
        if (!user || !await user.correctPasword(password, user.password)) throw new Error("incorrect password or email")
        
        sendToken(user,res,req,user.id)
    } catch (error) {
        next(error)
    }
}

export async function registerController(req, res, next) {

    try {
        const newUser = await User.create(req.body)
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET_JWT_TOKEN, {
            expiresIn: process.env.EXPIRE_IN
        })

        sendToken(newUser,res,req,newUser.id)

    } catch (error) {
        next(error)
    }
}

export async function getUser(req, res, next) {
    const user = await User.findById(req.user.id).select("-links._id")
    res.status(200).json({
        status:"succes",
        user
    })
}

