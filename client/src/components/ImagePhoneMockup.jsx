function ImagePhoneMockup({user}) {
    return (
        <image
            href={`http://localhost:3002/${user?.photo ?? ""}`} x="105.5" y="64" height="96" width="96"
            clip-path="url(#circleView)"
        />
    )
}

export default ImagePhoneMockup
