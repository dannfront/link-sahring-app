import { Link } from "react-router-dom"
import Btn from "./Btn"

function NavPreview({onHandleCopyLink}) {
    
    
    return (
        <header className="p-5 md:bg-white md:rounded-xl">
            <nav className="flex justify-between">
                <Link className="w-[10rem] border border-primary p-2 rounded-lg text-primary text-center" to="/">
                    Back to Editor
                </Link>
                
                <div className="w-[10rem]">
                <Btn onClick={onHandleCopyLink} className=' bg-primary text-white'>
                    Share Link
                </Btn>
                </div>
            </nav>
        </header>
    )
}

export default NavPreview
