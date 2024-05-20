import { useState } from "react"
import 'cropperjs/dist/cropper.css';
import loadImage from "blueimp-load-image"
import { useAuthContext } from "../contexts/contextAuthuser"

const URL_LOGIN = import.meta.env.VITE_BACK_URL || "http://localhost:3002"

function UploadPhoto({ imgUser, inputFile, dispatch }) {
    const { user } = useAuthContext()
    const [isVisible, setIsVisible] = useState(!user.photo)
    function handlerClickPhoto() {
        inputFile.current.click()
    }
    async function handlerSelectPhoto(e) {
        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        loadImage(
            file,
            function (canvas) {
                canvas.toBlob(blob => {
                    const imageUrl = URL.createObjectURL(blob);
                    imgUser.current.src = imageUrl;
                    reader.readAsDataURL(blob)
                    console.log(blob.size);
                });
            },
            { canvas: true, maxHeight: 180, maxWidth: 180 , aspectRatio:1}
        )
        setIsVisible(false)
        dispatch({ type: "select photo" })
    }
    return (
        <div className="flex flex-col gap-5 bg-White-bone rounded-lg p-3 my-10 md:flex-row  md:items-center md:justify-between">

            <h2>Profile picture</h2>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-5">
                <btn onClick={(e) => handlerClickPhoto(e)} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => user.photo ? setIsVisible(false) : setIsVisible(true)} className="relative size-48 bg-light-blue rounded-xl cursor-pointer">
                    <img className="rounded-xl size-48 " ref={imgUser} src={user.photo ? `${URL_LOGIN}/${user.photo}` : "ff"} alt="" />
                    <input ref={inputFile} type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" className="hidden" onChange={(e) => handlerSelectPhoto(e)} />
                    <div className="absolute top-[35%] right-[20%] size-[120px]">
                        {isVisible && <img className="mx-auto" src="../images/icon-upload-image.svg" alt="" />}
                        {isVisible && <p className=" text-primary">+ Upload Image</p>}
                    </div>
                </btn>
                <p className="text-sm md:text-xs w-[150px]">Image must be below 1024x1024px. Use PNG or JPG format.</p>
            </div>
        </div>
    )
}

export default UploadPhoto