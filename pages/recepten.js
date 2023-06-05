import { fetchReceptEntries } from "@utils/contentfulPosts"
import Recept from '@components/recept'


export default function Blog({recepten}) {
    return (
        <main className="space-y-4">
            <div className="grid grid-cols-3 gap-4 content-start">
                {/* {console.log(recepten)} */}
            {recepten.map((p) => {
                return <Recept key={p.gemaaktOp} titel={p.titel} bereidingswijze={p.bereidingswijze} slug={p.slug} gemaaktOp={p.gemaaktOp} auteur={p.auteur}/>
            })}
            </div>
        </main>
    )
}

export async function getStaticProps(){
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