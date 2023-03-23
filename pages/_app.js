import "../styles/globals.css"
import Link from "next/link"
import {useRouter} from "next/router"

export default function App({ Component, pageProps}) {
    const router = useRouter()

    return (
        <>
            <div >
                <ul className="flex justify-end" id="main-nav">
                    <li className={router.pathname == '/' ? "bg-gray-dark shadow rounded text-center flex-1 text-white" : "bg-white shadow rounded text-center flex-1"}>
                    <Link href="/" >Home</Link>
                    </li>
                    <li className={router.pathname == '/blog' ? "bg-gray-dark shadow rounded text-center flex-1 text-white" : "bg-white shadow rounded text-center flex-1"}>
                    <Link href="/blog">Blogs</Link>
                    </li>
                    <li className="w-1/4 bg-white shadow rounded text-center flex-1">
                    <Link href="" >over ons</Link>
                    </li>
                    <li className="w-1/4 bg-white shadow rounded text-center flex-1">
                    <Link href="" >Contact</Link>
                    </li>
                </ul>
            </div>
            <Component {...pageProps} />
        </>
    )
}

