import { ApolloClient, InMemoryCache } from '@apollo/client';
import {GET_TRENDING_MOVIES} from './ApiCalls';
import {GetMovies} from '../Interfaces'

const client = new ApolloClient({
  uri: 'https://tmdb.apps.quintero.io/',
  cache: new InMemoryCache(),
});

export const getMovies = async (endCursor: string) => {
  const res = await client
    .query({
      query: GET_TRENDING_MOVIES,
      variables: { first: 10, after: endCursor || null, size: 'W780' }
    });
  return res as GetMovies;
}
