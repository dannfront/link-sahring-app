import { useState } from "react"


export function useCheck() {
    const [email, setEmail] = useState("")
    const [emailEmpty, setEmailEmpty] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordEmpty, setpasswordEmpty] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordEmpty, setConfirmPasswordEmpty] = useState(false)

    function handdleEmail(e) {
        setEmail(e.target.value)
    }
    function handdlePassword(e) {
        setPassword(e.target.value)
        // if (password.length < 7) return setpasswordEmpty(true)
        // setpasswordEmpty(false)
    }
    function handdleConfirmPassword(e) {
        setConfirmPassword(e.target.value)
        // if (password.length < 7) return setConfirmPasswordEmpty(true)
        
        // setConfirmPasswordEmpty(false)
    }

    return { email,setEmail, setEmailEmpty, emailEmpty, password,setPassword, passwordEmpty, setpasswordEmpty, confirmPassword, confirmPasswordEmpty, setConfirmPasswordEmpty, handdleEmail, handdlePassword, handdleConfirmPassword }
}