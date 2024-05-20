import { useContextDataUser } from "../contexts/contextDataUser";

const URL_BACK = import.meta.env.VITE_BACK_URL || "http://localhost:3002"
function ImagePhoneMockup({ imgPreview = false }) {
    const { photo } = useContextDataUser()
    return (
        <image className=""
            href={`${imgPreview?.current?.src ?? `${URL_BACK}/${photo}`}`} x="105.5" y="64" height="100" width="100"
            clipPath="url(#circleView)"
        />
    )
}

export default ImagePhoneMockup