import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProfilePhotoPreview from "../components/ProfilePhotoPreview"
import DataUserPreview from "../components/DataUserPreview"
import LinksPreview from "../components/LinksPreview"
import MainPreview from "../components/MainPreview"

const URL_LOGIN=import.meta.env.VITE_BACK_URL||"http://localhost:3002"


function ShareLink() {
    const [user, setUser] = useState()
    const { id } = useParams()
    useEffect(function () {
        async function getUser() {
            const res = await fetch(`${URL_LOGIN}/api/v1/users/preview/${id}`)
            const data = await res.json()
            setUser(data.user)
        }
        getUser()
    }, [id])

    return (
        <>
            <div className="  md:bg-primary md:w-full md:h-[300px]  md:rounded-b-2xl md:p-5">
               
            </div>
            <MainPreview>

                <ProfilePhotoPreview user={user} />

                <DataUserPreview user={user} />

                <LinksPreview user={user} />
            </MainPreview>
        </>

    )
}

export default ShareLink
