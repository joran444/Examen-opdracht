import React from "react"
import Link from "next/link"
import { useRouter } from "next/router";
import { fetchReceptEntries } from "@utils/contentfulPosts";
import { useState, useEffect } from 'react';
// import ReactDOM from "react-dom";

function Footer() {
    const router = useRouter();
    const [randomTitles, setRandomTitles] = useState([]);

    useEffect(() => {
      fetchReceptEntries().then((titles) => setRandomTitles(titles));
    }, []);

    return (
        <>
            <div className='footer w-full h-72 flex'>
                <div className="flex flex-row justify-center basis-1/3">
                    <ul className="text-align-center">
                        <li className="flex justify-center items-center h-12"><h2>SOCIAL MEDIA'S</h2></li>
                        <li className="flex justify-center items-center h-12"><h2>FACEBOOK</h2></li>
                        <li className="flex justify-center items-center h-12"><h2>Instagram</h2></li>
                    </ul>
                </div>
                <div className="flex flex-row justify-center basis-1/3 border-x border-white">
                    <ul className="text-align-center">
                        <li className="flex justify-center items-center h-12"><h2>BLOGS</h2></li>
                        {randomTitles.map((title) => (
                            <li className="flex justify-center items-center h-12" key={title.sys.id}>
                                <Link href={`/recept/${title.fields.slug}`}>
                                    <p>{title.fields.titel}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-row justify-center basis-1/3">
                    <ul className="text-align-center">
                        <Link href="/" className={router.pathname == '/' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow m-auto w-1/4"}>
                            <li className="flex justify-center items-center h-12">Home</li>
                        </Link>
                        <Link href="/recepten" className={router.pathname === '/recepten' || router.pathname.startsWith('/recept/') ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow m-auto w-1/4" : "bg-black shadow m-auto w-1/4"}>
                            <li className="flex justify-center items-center h-12">Recepten</li>
                        </Link>
                        <Link href="/over-ons" className={router.pathname == '/overOns' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow font-cinzel m-auto w-1/4"}>
                            <li className="flex justify-center items-center h-12">Over ons</li>
                        </Link>
                        <Link href="/contact" className={router.pathname == '/contact' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow font-cinzel m-auto w-1/4"}>
                            <li className="flex justify-center items-center h-12">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="footer w-full h-14 flex flex-row place-content-evenly border-t border-white">
                <h2 className="text-center self-center">Copyright 2023</h2>
                <h2 className="text-center self-center">Realisatie: Joran</h2>
            </div>
        </>
    )
}

export default Footer