import TopMenu from '../../components/TopMenu/TopMenu';
import { StyleSheet, SafeAreaView, View, ActivityIndicator, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/Stacks';
import { IMovie, IMovieByCategory } from '../../types/IMovie';
import { useEffect, useState } from 'react';
import IMDBListMovies from './components/IMDBMovies/IMDBListMovies/IMDBListMovies';
import ModalMoviesOptions from '../../components/ModalMoviesOptions/ModalMoviesOptions';
import NowPlaying from './components/NowPlaying/NowPlaying';
import { getThemeStyles } from './Home.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { MovieOptions } from '../../types/MovieOptions';
import { getLinearColors } from '../../constants/linearColors';

type HomeProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = (props: HomeProps) => {
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>(false);
  const [optionMovie, setOptionMovie] = useState<MovieOptions>(MovieOptions.IMDB);
  let children: React.ReactNode;
  let styles: any;
  const theme = getLinearColors(optionMovie);

  useEffect(() => {
    setShowOptionsModal(false);
  }, [optionMovie]);

  if (optionMovie === 'IMDB') {
    styles = getThemeStyles(MovieOptions.IMDB);
    children = (
      <IMDBListMovies
        onMoviePress={(movie: IMovie) =>
          props.navigation.navigate('MovieDetails', { movie: movie })
        }
      />
    );
  } else if (optionMovie === MovieOptions.NOW_PLAYING) {
    styles = getThemeStyles(MovieOptions.NOW_PLAYING);
    children = <NowPlaying />;
  }

  return (
    <LinearGradient style={styles.container} colors={theme.backgroundLinearColors}>
      <SafeAreaView>
        <ModalMoviesOptions
          modalVisible={showOptionsModal}
          onHideModal={() => setShowOptionsModal(!showOptionsModal)}
          options={[MovieOptions.IMDB, MovieOptions.NOW_PLAYING]}
          changeOption={(item) => setOptionMovie(item)}
          selectedOption={optionMovie}
        />
        <TopMenu
          onPressDownArrow={() => {
            setShowOptionsModal(!showOptionsModal);
          }}
          backgroundColor={theme.menuColor}
          logoMenu={theme.logoMenu}
          titleMenu={theme.titleMenu}
        />
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
