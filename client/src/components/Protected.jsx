
import { useEffect } from "react"
import { useAuthContext } from "../contexts/contextAuthuser"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useLinksContext } from "../contexts/contextLinksUser"
import { useContextDataUser } from "../contexts/contextDataUser"

const URL_LOGIN=import.meta.env.VITE_BACK_URL||"http://localhost:3002"

function Protected({ children }) {
    const navigate = useNavigate()
    const { isAuth, dispatch } = useAuthContext()
    const { dispatch:dispatchLinks}=useLinksContext()
    const { dispatch:dispatchData,selectPhoto}=useContextDataUser()
    useEffect(function () {

        async function isVerifed() {
            try {
                const data = await axios.get(`${URL_LOGIN}/api/v1/users`, {
                    withCredentials: true
                })
                if (data.data.status !== "succes") throw new Error("the user is not authenticaded")
                dispatch({ type: "authenticated", payload: data.data.user })
                dispatchLinks({type:"link/Bd",payload:data.data.user.links})
                dispatchData({type:"name",payload:data.data.user.name})
                dispatchData({type:"lastName",payload:data.data.user?.lastName??""})
                dispatchData({type:"email",payload:data.data.user?.email??""})
                dispatchData({type:"photo",payload:data.data.user?.photo??""})
                dispatchData({type:"deselect Photo"})
            } catch (error) {
                console.error(error.message);
                dispatch({ type: "not authenticated" })
                navigate('/login')
            }
        }

        isVerifed()
    }, [dispatch, navigate, isAuth,selectPhoto])

    return isAuth ? children : null
}

export default Protected
