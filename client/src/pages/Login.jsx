
import Btn from "../components/Btn"
import DescriptionSection from "../components/DescriptionSection"
import Form from "../components/Form"
import InputsEmail from "../components/InputsEmail"
import InputsPassword from "../components/InputsPassword"
import HeaderLogin from "../components/HeaderLogin"
import MainLogin from "../components/MainLogin"
import FooterLogin from "../components/FooterLogin"
import { useCheck } from "../hooks/useCheck"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const URL_LOGIN=import.meta.env.VITE_BACK_URL||"http://localhost:3002"



function Login() {
    const navigate = useNavigate()
    const { email,setEmail, emailEmpty, password,setPassword, passwordEmpty, handdleEmail, handdlePassword, } = useCheck()
    async function handdlerSubmitLogin(e) {
        e.preventDefault()
        try {
           await axios.post(`${URL_LOGIN}/api/v1/users/login`, {
                email,
                password,

            },
                {
                    withCredentials: true
                }

            )
            setEmail("")
            navigate('/')

        } catch (error) {
            console.log(error.response.data.error);
            setEmail("")
            setPassword("")
            
        }
    }

    return (
        <>
            <HeaderLogin />

            <MainLogin>
                <DescriptionSection isClass="mt-10" title="Login" descrition="Add your details below to get back into the app" />
                <Form handdler={handdlerSubmitLogin}>
                    <InputsEmail state={email} hanndler={handdleEmail} isEmpty={emailEmpty} />
                    <InputsPassword htmlForId="password" placeholder="Enter your password" label="Password" state={password} hanndler={handdlePassword} empty={passwordEmpty} />
                    <Btn className="bg-primary text-white mt-5" >Login</Btn>
                </Form>
                <FooterLogin to='/register' message='Don’t have an account? Create account' redirect='register' />
            </MainLogin>
        </>
    )
}

export default Login

