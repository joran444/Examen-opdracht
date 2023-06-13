import { fetchWebsiteInfo } from "@utils/websiteInfo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';


export default function About({ aboutUs }) {

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => { return <h1 className="text-heading text-2xl">{children}</h1> },
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-heading text-xl">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-heading text-lg">{children}</h3>,
      // Add support for other heading levels if needed
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="p-2">{children}</p>
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <div>
      <div className='flex justify-center text-[#C9C9C9] items-center h-full p-5'>
        <div className='card w-full sm:w-1/2 md:w-full lg:w-5/6 xxl:w-3/5 max-h-min md:h-fit text-center mt-12 mb-12 rounded-[20px]'>
          {documentToReactComponents(aboutUs, options)}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchWebsiteInfo();
  const aboutUs = res[0].fields.aboutUs; // Access the about us data field
  return {
    props: {
      aboutUs,
    },
  }
}