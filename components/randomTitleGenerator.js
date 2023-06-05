import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const getRandomTitles = async (spaceId, accessToken) => {
  try {
    const client = createClient({
      space: spaceId,
      accessToken: accessToken,
    });

    const response = await client.getEntries({
      content_type: 'recepten',
      select: 'fields.titel,fields.slug',
    });

    const entries = response.items;

    const randomIndexes = getRandomIndexes(entries.length, 2);
    const randomTitles = randomIndexes.map((index) => entries[index]);
    return randomTitles;
  } catch (error) {
    console.error('Error retrieving random titles:', error);
    return [];
  }
};

const getRandomIndexes = (length, count) => {
  const indexes = [];
  while (indexes.length < count) {
    const randomIndex = Math.floor(Math.random() * length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
};

const RandomTitleGenerator = () => {
  const spaceId = 'hbe59so7qp64';
  const accessToken = 'aIL_PHLwNm9qe5j0A9d5R7lxzZXlMmBBt5kfXK76a9s';

  const [randomTitles, setRandomTitles] = useState([]);

  useEffect(() => {
    getRandomTitles(spaceId, accessToken).then((titles) => {
      setRandomTitles(titles);
    });
  }, []);

  return (
    <div>
      <h1>Random Title Generator</h1>
      {randomTitles.map((title) => (
        <div key={title.sys.id}>
          <h2>{title.fields.titel}</h2>
          <a href={`/recepten/${title.fields.slug}`}>View Recipe</a>
        </div>
      ))}
    </div>
  );
};

export default RandomTitleGenerator;
