const optionsGetListMovies = {
  method: 'GET',
};

const optionsPostMovies = {
  method: 'POST',
};

const local = 'http://192.168.100.4:5001';
const remote = 'https://imdbmovieservice.onrender.com';

export const APIConstants: {
  API_URL: string;
  API_KEY: string;
} = {
  API_URL: 'https://imdbmovieservice.onrender.com',
  API_KEY: 'null',
};

export { optionsGetListMovies, optionsPostMovies, local, remote };
