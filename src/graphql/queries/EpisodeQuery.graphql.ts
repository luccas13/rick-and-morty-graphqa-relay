import { graphql } from "react-relay";

export const EpisodeQuery = graphql`
  query EpisodeQuery($id: ID!) {
    episode(id: $id) {
      id
      __typename
      ...EpisodeDetailCardFragment
    }
  }
`;
