export type IMovie = {
  rank: number;
  title: string;
  thumbnail: string;
  rating: number;
  id: string;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: Array<string>;
  director: Array<string>;
  writers: Array<string>;
  imdbid: string;
};

export type IMovieByCategory = {
  [category: string]: Array<IMovie>;
};
