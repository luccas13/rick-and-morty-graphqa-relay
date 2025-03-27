import { graphql } from "react-relay";

export const CharactersQuery = graphql`
  query CharactersQuery {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;
