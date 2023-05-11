import { create } from 'zustand';
import { IMovie, IMovieByCategory } from '../types/IMovie';
import { deleteMovie, getSavedMovies, saveMovie } from '../services/moviesService';

type FavSavedMoviesStore = {
  favs: IMovie[];
  isLoading: boolean;
  setFavs: () => void;
  addToFav: (movie: IMovie) => void;
  removeFromFav: (movie: IMovie) => void;
};

const useFavSavedMoviesStore = create<FavSavedMoviesStore>((set, get) => ({
  favs: [],
  isLoading: true,
  setFavs: async () => {
    const response = await getSavedMovies();
    set({ favs: response });
    set({ isLoading: false });
  },
  addToFav: async (movie: IMovie) => {
    const response = await saveMovie(movie);
    if (response) {
      const _favs = [...get().favs, movie];
      set({ favs: _favs });
    }
  },
  removeFromFav: async (movie: IMovie) => {
    const _favs = [...get().favs];
    const response = await deleteMovie(movie.imdbid);

    if (response) {
      set({ favs: _favs.filter((movieFav) => movieFav.imdbid !== movie.imdbid) });
    }
  },
}));

export default useFavSavedMoviesStore;
