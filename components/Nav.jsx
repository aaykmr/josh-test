import Link from "next/link"

export default function Nav(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mt-1">
                    <li className="nav-item mr-2 active">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item mr-2">
                        <Link className="nav-link" href="Documentation">Documentation</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}