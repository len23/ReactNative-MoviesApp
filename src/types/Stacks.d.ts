import { IMovie, IMovieByCategory } from './IMovie';

export type HomeStackParamList = {
  Home: undefined;
  MovieList: {
    movieSList: IMovieByCategory;
  };
  MovieDetails: {
    movie: IMovie;
  };
};

export type FavoritesStackParamList = {
  BookMarkList: undefined;
  MovieDetails: {
    movie: movie;
  };
};
