import Link from 'next/link';
import { useRouter } from 'next/router';
import { fetchReceptEntries } from '@utils/contentfulPosts';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default function Post(props) {
  const router = useRouter()
  return (
    <div className="max-w-fit">
        <div className="flex">
          <p className="flex-1">
            <Link href="/blog">
              <small>&laquo; back to all blog posts</small>
            </Link>
          </p>
          <button className="flex-1" onClick={() => router.push("/blog")}>
            Click me to programmatically navigate or redirect
          </button>
        </div>
        <div className="p-8 m-12">
          <h1 className="text-center"><b>{props.recept.titel}</b></h1>
          {/* {console.log(props)} */}
          <div className="text-center">
            {documentToReactComponents(props.recept.bereidingswijze)}
          </div>
          <div>
          <p>Ingrediënten</p>
            <ul className="list-disc">
            {props.recept.ingredienten.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {props.recept.receptFoto.map((r, i)=>{
            return(
              <Image key={i} src={`https:` + r.fields.file.url} width={200} height={200} alt={r.fields.title} />
            )
          })}
          </div>
          <h3 className="text-center"><b>Geschreven door: {props.recept.auteur}</b></h3>
        </div>
    </div>
  )
}

export async function getStaticPaths() {
  const response = await fetchReceptEntries();
  // console.log(response)
  
  const paths = response.map((post) => ({
    params: { slug: post.fields.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const res = await fetchReceptEntries()
  // console.log(res)
  const recepts = res.map((p) => {
    return p.fields
})
  const recept = recepts.filter(post => post.slug === slug)[0]
  return {
      props: {
        recept,
      },
  }
}