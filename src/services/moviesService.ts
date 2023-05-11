import { APIConstants, getRequestOptions } from '../constants/APIConstants';
import { IMovie, IMovieByCategory } from '../types/IMovie';

const createFullAPIPath: (path: string) => string = (path) => {
  return (
    APIConstants.API_URL +
    path +
    (path.includes('?') ? '&' : '?') +
    'api_key=' +
    APIConstants.API_KEY
  );
};

async function makeAPICall<T>(path: string, options?: any): Promise<T> {
  console.log(createFullAPIPath(path));
  const response = await fetch(createFullAPIPath(path), options);
  return response.json() as Promise<T>;
}

export const getMoviesByCategory = async (): Promise<IMovieByCategory> => {
  let data: IMovieByCategory = {};
  try {
    const apiResponse = await makeAPICall<IMovieByCategory>('/moviesByCategory');
    data = apiResponse;
  } catch (err) {
    console.error(err);
  }
  return data;
};

export const getSavedIdMovies = async (): Promise<Array<string>> => {
  let data: Array<string> = [];
  try {
    const apiResponse = await makeAPICall<IMovie[]>('/getSavedMovies');
    data = apiResponse.map((movie) => movie.imdbid);
  } catch (err) {
    console.error(err);
  }
  return data;
};

export const getSavedMovies = async (): Promise<Array<IMovie>> => {
  let data: Array<IMovie> = [];
  try {
    const apiResponse = await makeAPICall<IMovie[]>('/getSavedMovies');
    data = apiResponse;
  } catch (err) {
    console.error(err);
  }
  return data;
};

export const saveMovie = async (movie: IMovie): Promise<IMovie | undefined> => {
  try {
    const requestOptions = getRequestOptions('POST', 'application/json', JSON.stringify(movie));
    const data = makeAPICall<IMovie>('/saveMovie', requestOptions);
    return data;
  } catch (error) {
    console.log('error => ', error);
  }
};

export const deleteMovie = async (imdbid: string): Promise<IMovie | undefined> => {
  try {
    const requestOptions = getRequestOptions('DELETE', 'application/json');
    const response = makeAPICall<IMovie>(`/removeSavedMovie/${imdbid}`, requestOptions);
    return response;
  } catch (err) {
    console.log('err ==> ', err);
  }
};
