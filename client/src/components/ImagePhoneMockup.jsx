
const URL_BACK=import.meta.env.VITE_BACK_URL||"http://localhost:3002"

function ImagePhoneMockup({user}) {
    return (
        <image
            href={`${URL_BACK}/${user?.photo ?? ""}`} x="105.5" y="64" height="96" width="96"
            clip-path="url(#circleView)"
        />
    )
}

export default ImagePhoneMockup
