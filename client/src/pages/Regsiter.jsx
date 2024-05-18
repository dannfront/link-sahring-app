import Axios from 'axios'

import Btn from "../components/Btn"
import DescriptionSection from "../components/DescriptionSection"
import Form from "../components/Form"
import InputsEmail from "../components/InputsEmail"
import InputsPassword from "../components/InputsPassword"
import HeaderLogin from "../components/HeaderLogin"
import MainLogin from "../components/MainLogin"
import FooterLogin from "../components/FooterLogin"
import { useCheck } from "../hooks/useCheck"
import { useNavigate } from 'react-router-dom'


const URL_LOGIN=import.meta.env.VITE_BACK_URL||"http://localhost:3002"

function Regsiter() {
    const {email,setEmail,setEmailEmpty,emailEmpty,password,passwordEmpty,setpasswordEmpty,confirmPassword,confirmPasswordEmpty,setConfirmPasswordEmpty,handdleEmail,handdlePassword,handdleConfirmPassword}=useCheck()
    const navigate=useNavigate()

    async function submitLogin(e){
        e.preventDefault()
        if(!email.length)return setEmailEmpty(true)
        if(!password.length || password.length<=7)return setpasswordEmpty(true)
        if(!confirmPassword.length || !(confirmPassword===password)) return setConfirmPasswordEmpty(true)

        try {
            const data = await Axios.post(`${URL_LOGIN}/api/v1/users/register`,{
                email,
                password,
                confirmPassword
            },
            {
                withCredentials:true
            }
        )
        navigate('/')
        } catch (error) {
            console.log(error);
        }finally{
            setEmail("")
        }
    }


    return (
        <>
            <HeaderLogin />

            <MainLogin>
                <DescriptionSection isClass="mt-10" title="Create account" descrition="Let’s get you started sharing your links!" />
                <Form handdler={submitLogin}>
                    <InputsEmail state={email} hanndler={handdleEmail} isEmpty={emailEmpty}/>
                    <InputsPassword htmlForId="password" placeholder="At least 8 characters" label="Create password" state={password} hanndler={handdlePassword} empty={passwordEmpty}/>
                    <InputsPassword htmlForId="confirm password" placeholder="At least 8 characters" label="Confirm password" state={confirmPassword} hanndler={handdleConfirmPassword} empty={confirmPasswordEmpty} />
                    <Btn className="bg-primary text-white mt-5">Regsiter</Btn>
                </Form>

                <FooterLogin to='/login' message='Don’t have an account? Create account' redirect='login'/>
            </MainLogin>
        </>
    )
}

export default Regsiter
