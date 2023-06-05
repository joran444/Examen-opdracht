import React from "react"
import Link from "next/link"
import { useRouter } from "next/router";
import Image from 'next/image';
// import ReactDOM from "react-dom";

function Header() {
  const router = useRouter();

  return (
    <div className="inner-container">
        <div className="relative w-full h-128 ">     
        <img src="/pictures/pexels-rene-asmussen-2544829.jpg" className="object-cover w-full h-full" alt="Chef die kookt" />
        </div>
        <div className="inset-x-0 bottom-0">
            <ul className="h-12 flex items-center text-align-center" id="main-nav">
                <Link href="/" className={router.pathname == '/' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow m-auto w-1/4"}>
                    <li className="text-heading flex justify-center items-center h-12">Home</li>
                </Link>
                <Link href="/recepten" className={router.pathname === '/recepten' || router.pathname.startsWith('/recept/') ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow m-auto w-1/4" : "bg-black shadow m-auto w-1/4"}>
                    <li className="text-heading flex justify-center items-center h-12">Recepten</li>
                </Link>
                <Link href="/over-ons" className={router.pathname == '/overOns' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow font-cinzel m-auto w-1/4"}>
                    <li className="text-heading flex justify-center items-center h-12">Over ons</li>
                </Link>
                <Link href="/contact" className={router.pathname == '/contact' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow font-cinzel m-auto w-1/4"}>
                    <li className="text-heading flex justify-center items-center h-12">Contact</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header