import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { CharactersQuery } from "../../graphql/queries/CharactersQuery.graphql";
import { CharactersQuery as CharactersQueryTypes } from "@/relay/__generated__";

const Characters: React.FC = () => {
  const data = useLazyLoadQuery<CharactersQueryTypes>(CharactersQuery, {});

  if (!data || !data.characters) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {data.characters.results &&
          data?.characters.results.map((character) => (
            <li key={character?.id}>
              <img
                src={character?.image || undefined}
                alt={character?.name || undefined}
                width={50}
              />
              <p>{character?.name || 'No data'}</p>
              <p>{character?.species || 'No data'}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Characters;
