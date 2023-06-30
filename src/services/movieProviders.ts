import { IMoviePlayingNow } from '../types/IMoviePlayingNow';
import { ICountryProvider } from '../types/IMovieProviders';
import { makeAPICall } from './apiUtilities';
const categories = require('../constants/moviedbGenres.json');

export const getMovieProviders = async (movieId: string): Promise<ICountryProvider> => {
  const apiResponse = await makeAPICall<ICountryProvider>(`/theMovieDb/movieProviders/${movieId}`);
  return apiResponse;
};

export const getPlayingNowMovies = async () => {
  const apiResponse = await makeAPICall<Array<IMoviePlayingNow>>(`/theMovieDb/teathers/playingNow`);
  return apiResponse;
};

export const getNameCategories = (genreIds: Array<number>) => {
  const nameCategories = categories.genres
    .filter((g: any) => genreIds.includes(g.id))
    .map((c: any) => c.name);

  return nameCategories;
};
