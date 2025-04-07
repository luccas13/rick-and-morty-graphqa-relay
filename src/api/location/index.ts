import { LocationsQuery$data as LocationQueryType } from '@/relay';
import axios from 'axios';

const getAllLocations = async (page: number): Promise<LocationQueryType['locations']> => {
  const query = `
  query {
    locations(page:${page}) {
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
  const response = await axios.post('https://rickandmortyapi.com/graphql', {
    query
  });
  return response.data.data.locations;
};

export { getAllLocations };
