import { fetchReceptEntries } from 'utils/contentfulPosts'

export default function Home({ Recept }) {
  return (
    <div className='flex justify-center text-white items-center h-full py-5'>
        <div className='card w-1/2 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere ex sit amet neque tempus consectetur. Nulla vitae gravida nisi, in iaculis augue. Nunc lacinia dolor ex, fermentum pharetra arcu eleifend eu. Donec convallis leo sit amet neque rutrum porttitor. Duis posuere dolor elit, eget varius justo ullamcorper placerat. Morbi eget elit sit amet mi consequat volutpat eget ut est. Integer eget tincidunt velit. Nam nulla elit, scelerisque dignissim porta vel, tincidunt in nibh. Nam ut ex imperdiet, malesuada ex semper, viverra lorem. Nunc efficitur orci sit amet faucibus rutrum. Phasellus feugiat hendrerit enim nec auctor. Nam facilisis nisl sed varius mattis. Donec neque tellus, lobortis id nibh et, aliquet mollis odio.
        </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchReceptEntries()
  const Recept = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      Recept,
    },
  }
}