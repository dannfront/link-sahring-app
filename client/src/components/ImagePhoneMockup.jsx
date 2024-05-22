import { useAuthContext } from "../contexts/contextAuthuser"



function ImagePhoneMockup({ imgPreview = false }) {
    const { user} = useAuthContext()
    return (
        <image className=""
            href={`${imgPreview?.current?.src ?? `${user.photo}`}`} x="105.5" y="64" height="100" width="100"
            clipPath="url(#circleView)"
        />
    )
}

export default ImagePhoneMockup