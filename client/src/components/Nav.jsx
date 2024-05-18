import { Link, NavLink } from "react-router-dom"


function Nav() {
    return (
        <header className=" md:w-[95%] md:mx-auto md:mt-5">
            <nav className="bg-white p-4 rounded-xl">
                <ul className="flex items-center justify-between">
                    <li>
                        <Link className="md:hidden"><img src="./images/logo-devlinks-small.svg" alt="logo" /></Link>
                        <Link className="hidden md:block" to='/'><img src="./images/logo-devlinks-large.svg" alt="logo" /></Link>
                    </li>
                    <li>
                        <NavLink to='/' className="flex gap-1 p-2 items-center justify-center rounded-lg hover:text-primary">

                            <svg className="svg size-[1.5rem]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z" />
                            </svg>
                            <span className="hidden md:block">Links</span>
                        </NavLink>
                    </li>

                    <li >
                        <NavLink to='/me' className="flex gap-1 p-2 items-center justify-center rounded-lg hover:text-primary">
                            <svg className="svg size-[1.5rem]" xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                                <path d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z" />
                            </svg>
                            <span className="hidden md:block">Profile</span>
                        </NavLink>
                    </li>
                    <li >
                        <div className="border border-primary p-2 rounded-lg hover:bg-light-blue">
                            <NavLink to='/preview' >
                                <img className="size-[1.5rem] md:hidden" src="./images/icon-preview-header.svg" alt="" />
                                <p className="hidden text-primary md:block">Preview</p>
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
