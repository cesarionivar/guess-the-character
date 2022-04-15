import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

interface Character {
  image: string;
  name: string;
}

export const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(gql`
    query {
      characters(page: ${page}) {
        results {
          name
          image
        }
      }
    }
  `);

  if (loading) {
    return <p className='loading__text'>Loading..</p>;
  }

  return (
    <div className='container'>
      <h2 className='title'>Rick and Morty Characters</h2>
      <div className='characters'>
        {data.characters.results.map((character: Character) => (
          <div className='character' key={character.name}>
            <img
              className='character__image'
              src={character.image}
              alt={character.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
