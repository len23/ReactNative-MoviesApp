import { Marker } from './IMarket';
import { IMovie, IMovieByCategory } from './IMovie';
import { IMoviePlayingNow } from './IMoviePlayingNow';

export type HomeStackParamList = {
  Home: undefined;
  MovieList: {
    movieSList: IMovieByCategory;
  };
  MovieDetails: {
    movie: IMovie;
  };
  MovieProviders: {
    movie: IMovie;
  };
  NowPlayingDetails: {
    movieNowPlaying: IMoviePlayingNow;
  };

  Maps: {
    marker: Marker;
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
