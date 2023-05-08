import { useEffect, useState } from 'react';
import { getMoviesByCategory } from '../../services/moviesService';
import HomeView from './Home.view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/Stacks';
import { IMovie, IMovieByCategory } from '../../types/IMovie';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = (props: HomeProps) => {
  const [movies, setMovies] = useState<IMovieByCategory>({});
  const [favMovies, setFavMovies] = useState<Array<IMovie>>([]);
  useEffect(() => {
    const fecthData = async () => {
      setMovies(await getMoviesByCategory());
    };
    fecthData();
  }, []);

  return (
    <HomeView
      moviesList={movies}
      onMoviePress={(movie: IMovie) => props.navigation.navigate('MovieDetails', { movie: movie })}
    />
  );
};

export default Home;
