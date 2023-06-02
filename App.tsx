import { useEffect } from 'react';
import useFavSavedMoviesStore from './src/store/favMoviesStore';
import useMoviesStore from './src/store/moviesStore';
import Root from './src/views/Root';

export default function App() {
  const [setFavs] = useFavSavedMoviesStore((state) => [state.setFavs]);
  const [setMovies] = useMoviesStore((state) => [state.setMovies]);
  useEffect(() => {
    const fecthData = async () => {
      setMovies();
      setFavs();
    };
    fecthData();
  }, []);
  return <Root />;
}
