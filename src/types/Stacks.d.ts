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

export type SignUpStackParamsList = {
  LogIn: undefined;
  SignUp: undefined;
};

export type UserProfileParamList = {
  UserProfile: undefined;
};

export type MapsParamsList = {
  Maps: undefined;
};
