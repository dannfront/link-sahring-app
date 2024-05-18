import mongoose from "mongoose";

async function connectDb(url){
    try {
        await mongoose.connect(url)
        console.log("connect to the data base");
    } catch (error) {
        console.log("Could not access database");
    }
}

export default connectDb