import React from "react"
import Link from "next/link"
import { useRouter } from "next/router";
import { fetchReceptEntries } from "@utils/contentfulPosts";
import { useState, useEffect } from 'react';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import RandomRecept from "@components/randomRecepts";

function Footer() {
    const router = useRouter();
    const [randomTitles, setRandomTitles] = useState([]);

    useEffect(() => {
        fetchReceptEntries().then((titles) => {
            const shuffledTitles = shuffleArray(titles, 3); // Limiting to 3 random titles
            setRandomTitles(shuffledTitles);
        });
    }, []);

    const shuffleArray = (array, limit) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray.slice(0, limit); // Returning a slice of the shuffled array
    };

    return (
        <>
            {router.pathname === '/' || router.pathname.startsWith('/recept/') ? (
                <div className="h-fit w-full">
                    <div className="max-w-full overflow-x-hidden">
                        <RandomRecept />
                    </div>
                </div>) : (<div></div>)}
            <div className='footer w-full h-72 flex'>
                <div className="hidden md:flex flex-row justify-center basis-1/3">
                    <ul className="text-center p-5">
                        <li className="h-12"><h2>SOCIAL MEDIA'S</h2></li>
                        <li className="h-12 w-fit sm:w-full flex gap-1 justify-center text-center">
                            <a href="" className="hidden md:block">Instagram</a>
                        </li>
                        <li className="h-12 w-fit sm:w-full flex gap-1 justify-center text-center">
                            <a href="" className="hidden md:block">FACEBOOK</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row justify-center basis-1/2 md:basis-1/3 border-r md:border-x border-white">
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
                <div className="flex flex-row justify-center basis-1/2 md:basis-1/3">
                    <ul className="text-align-center">
                        <Link href="/" className={router.pathname == '/' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow m-auto w-1/4"}>
                            <li className="flex justify-center items-center h-12">Home</li>
                        </Link>
                        <Link href="/recepten" className={router.pathname === '/recepten' || router.pathname.startsWith('/recept/') ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow m-auto w-1/4" : "bg-black shadow m-auto w-1/4"}>
                            <li className="flex justify-center items-center h-12">Recepten</li>
                        </Link>
                        <Link href="/about" className={router.pathname == '/about' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow font-cinzel m-auto w-1/4"}>
                            <li className="flex  justify-center items-center h-12">Over ons</li>
                        </Link>
                        <Link href="/contact" className={router.pathname == '/contact' ? "underline decoration-[#FF7500] underline-offset-2 bg-black shadow font-cinzel m-auto w-1/4" : "bg-black shadow font-cinzel m-auto w-1/4"}>
                            <li className="flex justify-center items-center h-12">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="footer w-full h-16 flex flex-row justify-around border-t border-white">
                <div className="flex text-center self-center"><h2>Copyright 2023</h2></div>
                <div className="flex text-center self-center gap-10 p-4">
                    <BsInstagram className="w-5 h-5 text-[#FF7500]" />
                    <BsFacebook className="w-5 h-5 text-[#FF7500]" />
                </div>
                <div className="flex text-center self-center"><h2>Realisatie: Joran</h2></div>
            </div>
        </>
    )
}

export default Footer