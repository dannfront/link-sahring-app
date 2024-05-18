import { useLinksContext } from "../contexts/contextLinksUser"
import axios from "axios"
import DescriptionSection from "../components/DescriptionSection"
import Section from "../components/Section"
import Nav from "../components/Nav"
import Btn from "../components/Btn"
import Started from "../components/Started"
import Separation from "../components/Separation"
import PreviewLinksHome from "../components/PreviewLinks"
import SelectLinks2 from "../components/SelectLinks2"
import Main from "../components/Main"
import useAlert from "../hooks/useAlert"
import Alert from "../components/Alert"

const URL_LOGIN=import.meta.env.VITE_BACK_URL||"http://localhost:3002"

function Home() {
    const [isCopied,setIsCopied]=useAlert()
    const { links, dispatch } = useLinksContext()
    async function handleUpdateLinks() {
        try {
            await axios.patch(`${URL_LOGIN}/api/v1/users`, {
                links
            },
                {
                    withCredentials: true
                }
            )
            setIsCopied(true)
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <Nav />
            <Main>
                <PreviewLinksHome />

                <Section>
                    <DescriptionSection title='Customize your links' descrition='Add/edit/remove links below and then share all your profiles with the world!' />
                    <Btn className="btn-secondary mt-5" onClick={() => dispatch({ type: "link/add" })}>+ add new link</Btn>

                    {!links.length && <Started />}
                    {links.length !== 0 &&
                        <div className="overflow-auto h-[400px]">
                            {links.map((_, i) => <SelectLinks2 key={i} index={i} />)}
                        </div>
                    }

                    <Separation />

                    <div className="md:w-[10rem] md:ml-auto">
                        <Btn onClick={handleUpdateLinks} className='btn-primary'>Save</Btn>
                    </div>
                </Section>
            </Main>
            {isCopied&&<Alert message='Your changes have been successfully saved!' img='icon-changes-saved' top={"50%"} />}
        </>
    )
}

export default Home
