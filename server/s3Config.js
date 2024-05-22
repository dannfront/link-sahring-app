import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config({path:'./config.env'})
// config s3 client
const client=new S3Client({
    region:process.env.REGION_AWS,
    credentials:{
        accessKeyId:process.env.KEY_ACCES_AWS,
        secretAccessKey:process.env.kEY_SECRET_AWS
    }
})

console.log(process.env.REGION_AWS);

export default client