const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchReceptEntries() {
  const entries = await client.getEntries({content_type: "recepten"})
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// export default { fetchBlogsEntries }

// export async function fetchSingleBlogEntry(slug) {
//   const entries = await client.getEntries({
//     content_type: "blogPost",
//     "fields.slug": slug,
//     limit: 1 // limit the result to a single entry
//   });

//   if (entries.items.length > 0) {
//     return entries.items[0]; // return the first (and only) entry
//   }

//   console.log(`Error getting entry with slug ${slug}.`);
// }

export default { fetchReceptEntries }