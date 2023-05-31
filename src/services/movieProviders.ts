import { ICountryProvider } from '../types/IMovieProviders';
import { makeAPICall } from './apiUtilities';

export const getMovieProviders = async (movieId: string): Promise<ICountryProvider> => {
  let data: ICountryProvider;
  const apiResponse = await makeAPICall<ICountryProvider>(`/movieProviders/${movieId}`);
  return apiResponse;
};
