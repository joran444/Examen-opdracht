import { createClient } from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export async function getContentModelNames() {
  const response = await client.getContentTypes();
  const contentModels = response.items.map((item) => item.name);
  return contentModels;
}
