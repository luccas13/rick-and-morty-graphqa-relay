import { graphql } from "react-relay";

export const LocationsQuery = graphql`
  query LocationsQuery(
    $page: Int!
    $name: String
    $type: String
    $dimension: String
  ) {
    locations(
      page: $page
      filter: { name: $name, type: $type, dimension: $dimension }
    ) {
      results {
        id
        name
        type
        dimension
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
