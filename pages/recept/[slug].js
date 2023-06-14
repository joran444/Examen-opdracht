import Link from 'next/link';
import { useRouter } from 'next/router';
import { fetchReceptEntries } from '@utils/contentfulPosts';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';



export default function Post(props) {
  const router = useRouter()

  //Options for loading text from contentful
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-heading text-2xl">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-heading text-xl">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-heading text-lg">{children}</h3>,
      // Add support for other heading levels if needed
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="font-poppins p-2">{children}</p>
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <div className="grid grid-rows-1 h-fit p-4">
      <div className="flex justify-between p-10 text-white">
        <div className="flex items-center border-b-4 border-black">
          <Link href="/recepten">
            <b className="flex items-center font-cinzel">
              Terug naar overzicht
            </b>
          </Link>
        </div>
        <div className="flex items-center border-b-4 border-black">
          <button onClick={() => router.push('/recept')} className="flex items-centers">
            <b className="font-cinzel">Volgende recept</b>
          </button>
        </div>
      </div>
      <div className="grid justify-center">
        <div className="bg-card p-8 justify-center w-fit lg:w-160 rounded-[10px] text-[#C9C9C9]">
          <h1 className="text-center p-4 font-cinzel">
            <b>{props.recept.titel}</b>
          </h1>
          <div className="text-center mb-4 font-poppins">
            {documentToReactComponents(props.recept.bereidingswijze, options)}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-2 p-6">
              <div className="col-span-1"> {/*This is the first half of the ingredient list */}
                <h1>Ingrediënten</h1>
                <ul className="list-disc p-3">
                  {props.recept.ingredienten.slice(0, Math.ceil(props.recept.ingredienten.length / 2)).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1"> {/*This is the second half of the ingredient list */}
                <h1>&nbsp;</h1>
                <ul className="list-disc p-3">
                  {props.recept.ingredienten.slice(Math.ceil(props.recept.ingredienten.length / 2)).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              {props.recept.receptFoto.map((r, i) => {
                return (
                  <Image
                    key={i}
                    src={`https:` + r.fields.file.url}
                    width={200}
                    height={200}
                    alt={r.fields.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-4 text-center">
            <h3 className="mb-2">
              <b>Geschreven door:</b> {props.recept.auteur}
            </h3>
            <p>{props.recept.gemaaktOp}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

//Getting a single recept for this page
export async function getStaticPaths() {
  const response = await fetchReceptEntries();
  const paths = response.map((post) => ({
    params: { slug: post.fields.slug },
  }));
  return { paths, fallback: false };
}

//Getting all data from a single recept to load on the website
export async function getStaticProps(context) {
  const { slug } = context.params;
  const res = await fetchReceptEntries()
  const recepts = res.map((p) => {
    return p.fields
  })
  //filter all the post to only be the one that got clicked on using the slug
  const recept = recepts.filter(post => post.slug === slug)[0]
  return {
    props: {
      recept,
    },
  }
}