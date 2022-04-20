import Link from "next/link";
import React from "react";
import Nav from "../components/Nav";
import Loader from "../components/Loader";

export default function Documentation(){
    return(
        <>   
        <div className="container">
            <main>
                <h1 className="card">Documentation</h1>
                <Loader show={true} />
            </main>
        </div>
        </>
    )
}
