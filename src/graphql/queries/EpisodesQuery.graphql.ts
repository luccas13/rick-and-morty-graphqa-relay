import { graphql } from "react-relay";

export const EpisodesQuery = graphql`
  query EpisodesQuery($page: Int!, $name: String, $episode: String) {
    episodes(page: $page, filter: { name: $name, episode: $episode }) {
      results {
        id
        __typename
        ...EpisodesListItemFragment
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
