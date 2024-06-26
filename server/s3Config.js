import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config({path:'./config.env'})
// config s3 clien
const client=new S3Client({
    region:process.env.REGION_AWS,
    credentials:{
        accessKeyId:process.env.KEY_A_AWS,
        secretAccessKey:process.env.kEY_S_AWS
    }
})


export default client