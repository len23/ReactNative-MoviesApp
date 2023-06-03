import { create } from 'zustand';
import { IMovieByCategory } from '../types/IMovie';
import { getMoviesByCategory } from '../services/moviesService';
import { IMoviePlayingNow } from '../types/IMoviePlayingNow';
import { getPlayingNowMovies } from '../services/movieProviders';

type MoviesStore = {
  movies: IMovieByCategory;
  moviesPlayingNow: Array<IMoviePlayingNow>;
  isLoading: boolean;
  setMovies: () => void;
};

const useMoviesStore = create<MoviesStore>((set, get) => ({
  movies: {},
  moviesPlayingNow: [],
  isLoading: true,
  setMovies: async () => {
    const responseMovies = await getMoviesByCategory();
    const responseMoviesPlayingNow = await getPlayingNowMovies();

    set({ movies: responseMovies });
    set((state) => ({
      moviesPlayingNow: [...state.moviesPlayingNow, ...responseMoviesPlayingNow],
    }));
    set({ isLoading: false });
  },
}));

export default useMoviesStore;
