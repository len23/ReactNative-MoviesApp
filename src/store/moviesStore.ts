import { create } from 'zustand';
import { IMovieByCategory } from '../types/IMovie';
import { getMoviesByCategory } from '../services/moviesService';

type MoviesStore = {
  movies: IMovieByCategory;
  isLoading: boolean;
  setMovies: () => void;
};

const useMoviesStore = create<MoviesStore>((set, get) => ({
  movies: {},
  isLoading: true,
  setMovies: async () => {
    const response = await getMoviesByCategory();
    set({ movies: response });
    set({ isLoading: false });
  },
}));

export default useMoviesStore;
