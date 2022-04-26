import Link from "next/link"
import toast from "react-hot-toast"
import { UserContext } from "../lib/context";
import { useContext } from "react";

export default function Nav(){
    const {user, username} = useContext(UserContext);
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-1 rounded w-100">
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
                            <Link className="nav-link" href="/enter">Enter</Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link className="nav-link" href="/documentation">Examples</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/documentation">Deploy</Link>
                        </li>
                    </ul>
                </div>
                {!username?
                    
                    <Link href="/enter">
                        <button className="btn-primary rounded m-2">
                            Login
                        </button>
                    </Link>
                 :
                 <>
                    <Link href="/enter">
                        <button className="btn-primary rounded m-2">
                            Write Posts
                        </button>
                    </Link>
                    <Link href="/enter">
                        <button className="btn-secondary rounded m-2">
                            Logout
                        </button>
                    </Link>
                    <Link href={`/${username}`}>
                        <img src={user.photoURL} width="40px" className="rounded-circle m-2"></img>
                    </Link>
                </>
                }
            </nav>
            
        </>
    )
}