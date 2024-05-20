import { useEffect, useRef, useState } from "react"
import axios from "axios"
import Btn from "../components/Btn"
import DescriptionSection from "../components/DescriptionSection"
import EditDataUse from "../components/EditDataUse"
import Main from "../components/Main"
import Nav from "../components/Nav"
import PreviewLinksHome from "../components/PreviewLinks"
import Section from "../components/Section"
import Separation from "../components/Separation"
import UploadPhoto from "../components/UploadPhoto"
import { useContextDataUser } from "../contexts/contextDataUser"
import Alert from "../components/Alert"
import useAlert from "../hooks/useAlert"

const URL_LOGIN=import.meta.env.VITE_BACK_URL||"http://localhost:3002"

function Me() {

    const [isCopied,setIsCopied]=useAlert()
    const imgUser = useRef(null)
    const inputFile = useRef(null)
    const [reload,setReload]=useState(false)
    const [nameEmpty,setNameEmpty]=useState(false)
    const { name, email, lastName, photo,dispatch } = useContextDataUser()


    useEffect(function(){
        if (!reload)return
        window.location.reload() 
    },[reload])


    async function handlerUpdateData(e) {
        e.preventDefault()
        if (!name) return setNameEmpty(true)
        
        const formData = new FormData()
        formData.append("avatar", inputFile.current.files[0])
        formData.append("name", name)
        formData.append("email", email)
        formData.append("lastName", lastName)
        if (inputFile.current.files[0] === undefined) formData.append("photo", photo)
        try {
            await axios.patch(`${URL_LOGIN}/api/v1/users`, formData,
                {
                    withCredentials: true,
                }
            )
            setNameEmpty(false)
            setIsCopied(true)
            setReload(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Nav />

            <Main>
                <PreviewLinksHome imgPreview={imgUser}/>
                <Section>
                    <DescriptionSection title='Profile Details' descrition='Add your details to create a personal touch to your profile.' />
                    <form onSubmit={(e) => handlerUpdateData(e)}>
                        <UploadPhoto imgUser={imgUser} inputFile={inputFile} dispatch={dispatch}/>

                        <EditDataUse nameEmpty={nameEmpty}/>

                        <Separation />

                        <div className="w-[9rem] ml-auto">
                            <Btn className='bg-primary text-white'>Save</Btn>
                        </div>
                    </form>

                </Section>
            </Main>
            {isCopied&&<Alert message='Your changes have been successfully saved!' img='icon-changes-saved' top={"50%"}/>}
        </>
    )
}

export default Me