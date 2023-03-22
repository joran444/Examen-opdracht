import { fetchEntries } from 'utils/contentfulPosts'
import Blog from '@components/blog'

export default function Home({ Blogs }) {
  return (
    <>
      <h1>Home pagina</h1>
      <p>Dit is de home pagina van de website</p>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const Blogs = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      Blogs,
    },
  }
}