import { useEffect, useState } from 'react';
import { getMoviesByCategory } from '../../services/moviesService';
import HomeView from './Home.view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/Stacks';
import { IMovie, IMovieByCategory } from '../../types/IMovie';
import useFavSavedMoviesStore from '../../store/favMoviesStore';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = (props: HomeProps) => {
  const [movies, setMovies] = useState<IMovieByCategory>({});
  const [favs, isLoading, setFavs] = useFavSavedMoviesStore((state) => [
    state.favs,
    state.isLoading,
    state.setFavs,
  ]);
  useEffect(() => {
    const fecthData = async () => {
      setMovies(await getMoviesByCategory());
      setFavs();
    };
    fecthData();
  }, []);

  return (
    <HomeView
      moviesList={movies}
      favsMoviesList={favs}
      onMoviePress={(movie: IMovie) => props.navigation.navigate('MovieDetails', { movie: movie })}
      isLoading={isLoading}
    />
  );
};

export default Home;
