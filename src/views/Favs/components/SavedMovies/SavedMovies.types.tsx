import { IMovie } from '../../../../types/IMovie';

export type SavedMoviesProps = {
  favs: IMovie[];
  removeFromFav: (movie: IMovie) => void;
};
