import Link from "next/link"

export default function Nav(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-1 rounded">
                <button className="navbar-toggler align-items-end" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mt-1">
                        <li className="nav-item mr-2 active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link className="nav-link" href="/documentation">Documentation</Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link className="nav-link" href="/documentation">Learn</Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link className="nav-link" href="/documentation">Examples</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/documentation">Deploy</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}