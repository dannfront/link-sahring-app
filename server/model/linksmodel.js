import mongoose from "mongoose";


const LinksSchema=new mongoose.Schema({
    url:{
        type:String,
        required:[true,"url is required"]
    },
    img:{
        type:String,
        required:[true,"img is required"]
    },
    platform:{
        type:String
    },
    color:String
})



export default LinksSchema