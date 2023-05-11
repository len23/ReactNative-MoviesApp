import { ImageBackground, View, ActivityIndicator } from 'react-native';
import MovieData from './components/MovieData/MovieData';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import useFavSavedMoviesStore from '../../store/favMoviesStore';
import detailScreenStyles from './DetailScreee.styles';
import { DetailScreenProps } from './DetailScreen.types';
import TrailerModal from '../../components/TrailerModal/TrailerModal';

const DetailScreen = (props: DetailScreenProps) => {
  const styles = { ...detailScreenStyles };
  const movie = props.route.params.movie;
  const [favs, addToFav, removeFromFav] = useFavSavedMoviesStore((state) => [
    state.favs,
    state.addToFav,
    state.removeFromFav,
  ]);
  const [seeTrailer, setSeeTrailer] = useState<boolean>(false);
  const [colorButton, setColorButton] = useState<string>('#FFF');
  const [saved, setSaved] = useState<Boolean>(() =>
    favs.some((fav) => movie.imdbid === fav.imdbid),
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setSaved(favs.some((fav) => movie.imdbid === fav.imdbid));
  }, [favs]);

  const handleSeeTrailer = () => {
    setSeeTrailer(!seeTrailer);
    setColorButton(colorButton === '#FFF' ? '#f5c518' : '#FFF');
  };

  const handleSaveMovie = async () => {
    setIsLoading(true);
    if (saved) {
      await removeFromFav(movie);
    } else {
      await addToFav(movie);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImageMovie} source={{ uri: movie.image }}>
        <View>
          <LinearGradient
            style={styles.header}
            colors={['#000000c4', '#0000006e', '#0000004d', 'transparent']}
            locations={[0.4, 0.8, 0.9, 1.0]}
          >
            <Ionicons
              name="arrow-back-outline"
              onPress={() => props.navigation.goBack()}
              size={40}
              color="#FFF"
            />
            {!isLoading ? (
              <Ionicons
                name={!saved ? `bookmark-outline` : `bookmark`}
                onPress={handleSaveMovie}
                size={40}
                color="#FFF"
              />
            ) : (
              <ActivityIndicator size="large" animating={isLoading} hidesWhenStopped={true} />
            )}
          </LinearGradient>
        </View>
      </ImageBackground>
      <MovieData movie={movie} onClickSeeTrailer={handleSeeTrailer} colorButton={colorButton} />
      <TrailerModal
        seeTrailer={seeTrailer}
        onPlayTrailer={handleSeeTrailer}
        idTrailer={movie.trailer.split('/').pop()}
      />
    </View>
  );
};

export default DetailScreen;
