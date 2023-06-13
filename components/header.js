import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from 'next/head';

function Header() {
  const router = useRouter();

  return (
    <div className="relative">
      <Head>
        <title>Culinair leesvoer</title>
      </Head>
      <div className="relative w-full h-72 sm:h-128">
        <div className="hidden sm:block absolute inset-0 p-4">
          <img src="/pictures/Frame.svg" className="h-48" alt="Logo" />
        </div>
        <img src="/pictures/pexels-rene-asmussen-2544829.jpg" className="object-cover w-full h-full hidden sm:block" alt="Chef die kookt" />
        <div className="sm:hidden absolute inset-0 bg-black flex items-center justify-center">
          <img src="/pictures/Frame.svg" className="h-48" alt="Logo" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-transparent bg-black">
        <ul className="h-12 flex items-center text-align-center">
          <Link href="/" className={router.pathname == '/' ? "underline decoration-[#FF7500] underline-offset-2 shadow font-cinzel w-full" : "shadow w-full"}>
            <li className="text-nav-heading flex justify-center items-center h-12">Home</li>
          </Link>
          <Link href="/recepten" className={router.pathname === '/recepten' || router.pathname.startsWith('/recept/') ? "underline decoration-[#FF7500] underline-offset-2 shadow w-full" : "shadow w-full"}>
            <li className="text-nav-heading flex justify-center items-center h-12">Recepten</li>
          </Link>
          <Link href="/about" className={router.pathname == '/about' ? "underline decoration-[#FF7500] underline-offset-2 shadow font-cinzel w-full" : "shadow font-cinzel w-full"}>
            <li className="text-nav-heading flex justify-center items-center h-12">Over ons</li>
          </Link>
          <Link href="/contact" className={router.pathname == '/contact' ? "underline decoration-[#FF7500] underline-offset-2 shadow font-cinzel w-full" : "shadow font-cinzel w-full"}>
            <li className="text-nav-heading flex justify-center items-center h-12">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header;
