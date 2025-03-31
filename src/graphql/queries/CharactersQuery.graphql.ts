import { graphql } from "react-relay";

export const CharactersQuery = graphql`
  query CharactersQuery(
    $page: Int!
    $name: String
    $status: String
    $species: String
    $type: String
    $gender: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        species: $species
        type: $type
        gender: $gender
      }
    ) {
      results {
        id
        __typename
        name
        image
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
