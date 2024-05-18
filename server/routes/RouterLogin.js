import express from 'express'
import multer from 'multer'
import { loginController,registerController,auth,getUser } from '../controller/authController.js'
import updateUserController from '../controller/updateController.js'
import previewController from '../controller/previewController.js'

const routerLogin=express.Router()
const upload=multer({dest:'uploads/'})

routerLogin.post('/login',loginController)
routerLogin.post('/register',registerController)
routerLogin.get('/preview/:id',previewController)

//autenticacion
routerLogin.get('/',auth,getUser)
routerLogin.patch('/', upload.single('avatar'), auth, updateUserController)
export default routerLogin