import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/Stacks';
import { IMovie } from '../../types/IMovie';
import IMDBListMovies from './components/IMDBMovies/IMDBListMovies/IMDBListMovies';
import NowPlaying from './components/NowPlaying/NowPlaying';
import { MovieOptions } from '../../types/MovieOptions';
import MainContainer from '../../containers/MainContainer/MainContainer';
import useThemeStore from '../../store/themeStore';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = (props: HomeProps) => {
  const [theme] = useThemeStore((state) => [state.optionTheme]);
  let children: React.ReactNode;

  if (theme === 'IMDB') {
    children = (
      <IMDBListMovies
        onMoviePress={(movie: IMovie) =>
          props.navigation.navigate('MovieDetails', { movie: movie })
        }
      />
    );
  } else if (theme === MovieOptions.NOW_PLAYING) {
    children = <NowPlaying />;
  }

  return <MainContainer>{children}</MainContainer>;
};

export default Home;
