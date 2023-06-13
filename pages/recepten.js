import { fetchReceptEntries } from "@utils/contentfulPosts"
import Recept from '@components/recept'
import { BsSearch } from 'react-icons/bs';



import React, { useState } from 'react';

export default function Blog({ recepten }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecepten, setFilteredRecepten] = useState(recepten);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const filtered = recepten.filter((recept) =>
            recept.titel.toLowerCase().includes(query.toLowerCase()) ||
            recept.auteur.toLowerCase().includes(query.toLowerCase()) ||
            recept.gemaaktOp.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecepten(filtered);
    };

    return (
        <main className="space-y-4 min-h-144">
            <div className="flex justify-center text-black py-5 h-24 min-h-80">
                <form>
                    <div className="flex items-center rounded-full bg-white md:w-128 h-full py-5 px-4">
                        <input
                            type="search"
                            className="w-full py-1 px-2 bg-transparent outline-none"
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
            {filteredRecepten.length > 0 ? (
                <div className="grid sm:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 p-3">
                    {filteredRecepten.map((p) => (
                        <Recept
                            key={p.gemaaktOp}
                            titel={p.titel}
                            omschrijving={p.omschrijving}
                            slug={p.slug}
                            gemaaktOp={p.gemaaktOp}
                            auteur={p.auteur}
                            image={p.receptFoto[0].fields}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center text-white items-center py-5 h-80">
                    <div className="card w-1/2 text-center">
                        Geen recepten gevonden
                    </div>
                </div>
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