import { IMoviePlayingNow } from '../types/IMoviePlayingNow';
import { ICountryProvider } from '../types/IMovieProviders';
import { makeAPICall } from './apiUtilities';

export const getMovieProviders = async (movieId: string): Promise<ICountryProvider> => {
  const apiResponse = await makeAPICall<ICountryProvider>(`/theMovieDb/movieProviders/${movieId}`);
  return apiResponse;
};

export const getPlayingNowMovies = async () => {
  const apiResponse = await makeAPICall<Array<IMoviePlayingNow>>(
    `/theMovieDb/teathers/playingNow`,
  );
  return apiResponse;
};
