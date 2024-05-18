

import DataUserPreview from "../components/DataUserPreview"
import LinksPreview from "../components/LinksPreview"
import MainPreview from "../components/MainPreview"
import NavPreview from "../components/NavPreview"
import ProfilePhotoPreview from "../components/ProfilePhotoPreview"
import { useAuthContext } from "../contexts/contextAuthuser"
import Alert from "../components/Alert"
import useAlert from "../hooks/useAlert"

const FRONT_URL=import.meta.env.VITE_FORNT_URL||"http://localhost:5173"

function Preview() {
    const { user } = useAuthContext()
    const [isCopied,setIsCopied] = useAlert()

    async function handleCopyLink() {
        setIsCopied(true)
        await navigator.clipboard.writeText(`${FRONT_URL}/preview/${user._id}`)
    }

    return (
        <>
            <div className="  md:bg-primary md:w-full md:h-[357px]  md:rounded-b-2xl md:p-5">
                <NavPreview user={user} onHandleCopyLink={handleCopyLink} />
            </div>
            <MainPreview>
                <ProfilePhotoPreview user={user} />

                <DataUserPreview user={user} />

                <LinksPreview user={user} />
            </MainPreview>

            {isCopied && <Alert message='The link has been copied to your clipboard!' img='icon-link-copied-to-clipboard' top="85%"/>}


        </>
    )
}

export default Preview
