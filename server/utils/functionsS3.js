import { PutObjectCommand,GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import client from "../s3Config.js";

export async function putImageBucket(imageProfile,newPath){
    const command=new PutObjectCommand({
        Bucket:process.env.NAME_BUCKET_AWS,
        Key:newPath,
        Body:imageProfile
    })

    await client.send(command)
}

export async function getImageBucket(fileNme){
    const command=new GetObjectCommand({
        Bucket:process.env.NAME_BUCKET_AWS,
        Key:fileNme
    })
    return await getSignedUrl(client,command,{expiresIn:86400})
}