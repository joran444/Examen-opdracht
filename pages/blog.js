import { fetchEntries } from "@utils/contentfulPosts"

export default function Blog({blogs}) {
    console.log(blogs)
    return (
        <>
            <h1>Alle blogs</h1>
            <p>Dit is de Blog pagina</p>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetchEntries()
    const blogs = await res.map((p) => {
        return p.fields
    })

    return {
        props: {
            blogs,
        },
    }
}