import { Link } from "react-router-dom"

function FooterLogin({to,message,redirect}) {
    return (
        <footer className="container flex flex-col items-center justify-center mt-5 pb-5">
                    <p className="text-grey">{message}</p>
                    <Link to={to} className="text-primary">{redirect}</Link>
        </footer>
    )
}

export default FooterLogin
