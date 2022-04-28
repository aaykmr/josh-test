import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Created with <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className="grid">
          <Link href="feed">
            <div className="card">
              <h3>Feed &rarr;</h3>
              <p>Posts</p>
            </div>
          </Link>

          <Link href="enter">
            <div className="card">
              <h3>Enter &rarr;</h3>
              <p>Login</p>
            </div>
          </Link>

          <Link href="admin">
            <div className="card">
              <h3>Admin &rarr;</h3>
              <p>Admin and posts</p>
            </div>
          </Link>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  );
}
