import mongoose from "mongoose";
import bcrypt from "bcrypt"
import validator from "validator";
import LinksSchema from "./linksmodel.js";
const usersSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"the name is mandatory"],
        unique:true,
        validator:[validator.isEmail,"email is required"]
    },
    password:{
        type:String,
        minlength:8,
        required:[true,"password is required"],
        select:false
    },
    confirmPassword:{
        type:String,
        validate:{
            validator:function(v){
                return v===this.password
            },
            message:"the password is not the same"
        },
        select:false
    },
    name:{
        type:String,
        default:""
    },

    lastName:{
        type:String,
        default:""
    },

    photo:{
        type:String,
        default:""
    },

    links:[LinksSchema]
})


usersSchema.pre('save',async function(next){

    if(!this.isModified("password")) next()
    const saltRounds=10
    const passwordHash=await bcrypt.hash(this.password,saltRounds)
    this.password=passwordHash
    this.confirmPassword=undefined

    next()
})

usersSchema.methods.correctPasword=async function(currentPass,passDb){
    return await bcrypt.compare(currentPass,passDb)
}



const User=mongoose.model("User",usersSchema)

export default User