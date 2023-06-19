import { fetchReceptEntries } from "@utils/contentfulPosts"
import Recept from '@components/recept'
import { BsSearch } from 'react-icons/bs';
import Pagination from "@components/pagination";

import React, { useState, useEffect } from 'react';

export default function Blog({ recepten }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecepten, setFilteredRecepten] = useState(recepten);
    const [currentPage, setCurrentPage] = useState(1); //The page where you start in the recepten overview
    const [receptenPerPage, setReceptenPerPage] = useState(6); //the amount of recepten per page, this will be changed later on the width of the device
    const totalPages = Math.ceil(filteredRecepten.length / receptenPerPage);
    const [windowWidth, setWindowWidth] = useState(0); // set the window with to pixels, this is to check on what device you are

    //The search handler for the search field
    const handleSearchChange = (event) => {
        event.preventDefault(); // stops people from reloading the page when they hit enter
        const query = event.target.value;
        setSearchQuery(query);
        const filtered = recepten.filter((recept) =>
            recept.titel.toLowerCase().includes(query.toLowerCase()) ||
            recept.auteur.toLowerCase().includes(query.toLowerCase()) ||
            recept.gemaaktOp.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecepten(filtered);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        setWindowWidth(window.innerWidth);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 767) {
            //Set recepten per page to 3 for phone
            setReceptenPerPage(3);
        } else if (windowWidth <= 1024) {
            //Set recepten per page to 4 for tablet
            setReceptenPerPage(4);
        }
        else {
            //Set recepten per page to 6 for Bigger screens, think laptop or pc
            setReceptenPerPage(6);
        }
    }, [windowWidth]);


    const indexOfLastRecept = currentPage * receptenPerPage;
    const indexOfFirstRecept = indexOfLastRecept - receptenPerPage;
    const currentRecepten = filteredRecepten.slice(indexOfFirstRecept, indexOfLastRecept);

    return (
        <main className="space-y-4 min-h-144">
            <div className="flex justify-center text-black py-5 h-24 min-h-80">
                <form onSubmit={handleSearchChange}>
                    <div className="flex items-center rounded-full bg-white md:w-128 h-full py-5 px-4">
                        <input
                            type="search"
                            className="w-full py-1 px-2 bg-transparent outline-none font-cinzel"
                            placeholder="Wat zoekt u...?"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button className="ml-2">
                            <BsSearch className="h-10 w-10" />
                        </button>
                    </div>
                </form>
            </div>
            {/* check if there is any data in the currentRecept array  */}
            {currentRecepten.length > 0 ? (
                <div className="grid sm:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 p-3">
                    {/* Load the currentRecepten array in by using the map function on that array with data*/}
                    {currentRecepten.map((p, index) => (
                        <React.Fragment key={index}>
                            <Recept
                                key={p.index}
                                titel={p.titel}
                                omschrijving={p.omschrijving}
                                slug={p.slug}
                                gemaaktOp={p.gemaaktOp}
                                auteur={p.auteur}
                                image={p.receptFoto[0].fields}
                            />
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center text-white items-center py-5 h-80">
                    <div className="card w-1/2 text-center font-cinzel">
                        Geen recepten gevonden
                    </div>
                </div>
            )}

            {/* Pagination handler */}
            {filteredRecepten.length > receptenPerPage && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </main>
    );
}


export async function getStaticProps() {
    const res = await fetchReceptEntries()
    const recepten = await res.map((p) => {
        return p.fields
    })

    return {
        props: {
            recepten,
        },
    }
}