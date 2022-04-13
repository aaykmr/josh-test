import Link from "next/link";
import react from "react";
import Head from "next/head";
import Script from "next/script";

export default function App(){
    return(
        <>
            <Head>
                <title>Next Documentation</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>Documentation</h1>
            <Link href="/">
                <button>Home</button>
            </Link>
        </>
    )
}
