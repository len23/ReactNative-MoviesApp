import { APIConstants, optionsGetListMovies, remote } from '../constants/APIConstants';
import { IMovie, IMovieByCategory } from '../types/IMovie';

const nameAddress = remote;

const createFullAPIPath: (path: string) => string = (path) => {
  return (
    APIConstants.API_URL +
    path +
    (path.includes('?') ? '&' : '?') +
    'api_key=' +
    APIConstants.API_KEY
  );
};

async function makeAPICall<T>(path: string): Promise<T> {
  console.log(createFullAPIPath(path));
  const response = await fetch(createFullAPIPath(path));
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

// const getSavedMovies = async (cb) => {
//   try {
//     const movies = await (
//       await fetch(`${nameAddress}/getSavedMovies`, optionsGetListMovies)
//     ).json();
//     cb(movies);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const saveMovie = async (movie) => {
//   try {
//     const results = await fetch(`${nameAddress}/saveMovie`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         imdbid: movie.imdbid,
//         title: movie.title,
//         thumbnail: movie.thumbnail,
//         rating: movie.rating,
//         director: movie.director,
//         trailer: movie.trailer,
//       }),
//     });
//     const resultMovie = await results.json();
//     return resultMovie;
//   } catch (error) {
//     console.log('error => ', error());
//   }
// };

// const deleteMovie = async (imdbid, cb) => {
//   try {
//     await fetch(`${nameAddress}/removeSavedMovie/${imdbid}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     cb(imdbid);
//   } catch (error) {
//     console.log('err ==> ', err);
//   }
// };

// export { deleteMovie, saveMovie, getMoviesByCategory, getSavedIdMovies, getSavedMovies };
