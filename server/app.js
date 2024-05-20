import express from 'express'
import cors from "cors"
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import routerLogin from './routes/RouterLogin.js'

const app=express()


const limiter=rateLimit({
    windowMs:24*60*60*100,
    max:500
})

app.use(cors({
    origin:process.env.URL_CLIENT||"http://localhost:5173",
    credentials:true
}))

app.use('/uploads', express.static('uploads'));

app.use(helmet())

app.use(limiter)
app.use(mongoSanitize());
app.use(cookieParser())
app.use(express.json())


app.use('/api/v1/users',routerLogin)

app.use((err,req,res,next)=>{
    res.status(500).json({
        status:"failed",
        error:err.message
    })
})

export  {app}