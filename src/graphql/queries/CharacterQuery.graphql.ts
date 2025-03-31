import { graphql } from "react-relay";

export const CharacterQuery = graphql`
  query CharacterQuery($id: ID!) {
    character(id: $id) {
      id
      __typename
      name
      status
      species
      type
      gender
      # location {
      #   id
      #   __typename
      #   name
      # }
      image
    }
  }
`;
