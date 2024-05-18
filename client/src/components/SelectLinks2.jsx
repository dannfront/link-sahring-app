import { useEffect, useState } from "react"
import ListLinks from "./ListLinks"
import { useLinksContext } from "../contexts/contextLinksUser"
import { useAuthContext } from "../contexts/contextAuthuser"

const links = [
    {
        app: 'Github',
        img: 'images/icon-github-grey.svg',
        color: '#1A1A1A'
    },
    {
        app: 'Frontend Mentor',
        img: 'images/icon-frontend-mentor-grey.svg',
        color: '#FFFFFF'
    },
    {
        app: 'Twitter',
        img: 'images/icon-twitter-grey.svg',
        color: '#43B7E9'
    },
    {
        app: 'LinkedIn',
        img: 'images/icon-linkedin-grey.svg',
        color: '#2D68FF'
    },
    {
        app: 'Youtube',
        img: 'images/icon-youtube-grey.svg',
        color: '#EE3939'
    },
    {
        app: 'Facebook',
        img: 'images/icon-facebook-grey.svg',
        color:'#2442AC'
    },
    {
        app: 'Twitch',
        img: 'images/icon-twitch-grey.svg',
        color:'#EE3FC8'
    },
    {
        app: 'Dev.to',
        img: 'images/icon-devto-grey.svg',
        color:'#333333'
    },
    {
        app: 'Codewars',
        img: 'images/icon-codewars-grey.svg',
        color:'#8A1A50'
    },
    {
        app: 'Codepen',
        img: 'images/icon-codepen-grey.svg',
        color:'#302267'
    },
    {
        app: 'freeCodeCamp',
        img: 'images/icon-freecodecamp-grey.svg',
        color:'#302267'
    },
    {
        app: 'GitLab',
        img: 'images/icon-gitlab-grey.svg',
        color:'#EB4925'
    },
    {
        app: 'Hashnode',
        img: 'images/icon-hashnode-grey.svg',
        color:'#0330D1'
    },
    {
        app: 'Stack Overflow',
        img: 'images/icon-stack-overflow-grey.svg',
        color:'#EC7100'
    },
]

function SelectLinks2({ index }) {

    const { user } = useAuthContext()

    const { dispatch } = useLinksContext()
    const [isClicked, setIsClicked] = useState(false)
    const [platform, setPlatform] = useState(user.links[index]?.platform ?? "")
    const [img, setPlatformImg] = useState(user.links[index]?.img ?? "")
    const [url, setUrl] = useState(user?.links[index]?.url ?? "")
    const [color,setColor]=useState("")

    function handleOpenPlatform() {
        setIsClicked(!isClicked)
    }

    function handleSelectPlatform(app, img,color) {
        setPlatform(app)
        setPlatformImg(img)
        setColor(color)
        setIsClicked(false)
    }
    function urlPlatform(e) {
        setUrl(e.target.value)
    }

    useEffect(function () {

        dispatch({ type: "link/update", payload: { index, properties: { url, platform, img, color} } })

    }, [platform, url, index,color])

    return (
        <div className="mt-5 p-2 bg-White-bone rounded-xl border">
            <div className="bg-White-bone relative">
                <div className="flex justify-between" >
                    <span>Link#{index + 1}</span>
                    <button onClick={() => dispatch({ type: "link/remove", payload: index })}>Remove</button>
                </div>
                <div className="mt-5">
                    <span className=" text-sm">Platform</span>
                    <button onClick={handleOpenPlatform} className="flex justify-between shadow-md items-center w-full bg-white p-1 rounded-md border focus focus:outline-none focus:border-primary focus:shadow-primary/40" >
                        <div className="flex gap-2 items-center">
                            <img src={`../${img}`} alt="" />
                            {!platform && <span>Select your platform</span>}
                            {platform && <span>{platform}</span>}
                        </div>
                        <img src="../images/icon-chevron-down.svg" alt="Chevron down icon" />
                    </button>
                </div>
                {isClicked &&
                    <ul className="mt-3 rounded-xl border border-light-grey p-2 overflow-auto bg-white h-[250px] w-full z-10 absolute">
                        {
                            links.map(link => (
                                <ListLinks link={link} key={link.app} onHandleSelectPlarform={handleSelectPlatform} />
                            ))
                        }
                    </ul>}
                <div className="mt-5 z-0">
                    <label className="text-sm" htmlFor="link">Link</label>
                    <input className="block focus shadow-lg w-full p-1 rounded-md focus:outline-none focus:border-primary focus:shadow-primary/40" value={url} placeholder="e.g. https://www.github.com/johnappleseed" type="text" name="" id="link" onChange={(e) => urlPlatform(e)} />
                </div>
            </div>
        </div>
    )
}

export default SelectLinks2
