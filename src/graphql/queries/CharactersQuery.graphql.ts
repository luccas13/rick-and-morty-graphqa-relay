import { graphql } from "react-relay";

export const CharactersQuery = graphql`
  query CharactersQuery($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        gender
        image
      },
      info {
        count
        pages
      }
    }
  }
`;
