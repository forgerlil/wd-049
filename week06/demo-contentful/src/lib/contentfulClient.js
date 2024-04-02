import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const getAllDucks = async (limit = 10) => {
  try {
    const allDucks = await client.getEntries({
      content_type: 'duck',
      limit,
    });

    return allDucks.items;
  } catch (error) {
    console.error(error);
  }
};
