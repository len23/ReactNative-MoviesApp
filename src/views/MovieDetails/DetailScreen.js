import { StyleSheet, ImageBackground, View, Image, Pressable, LayoutAnimation } from 'react-native';
import MovieData from './components/MovieData';
import { LinearGradient } from 'expo-linear-gradient';
import TrailerModal from './components/TrailerModal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { saveMovie, deleteMovie } from '../../services/moviesService';

export default DetailScreen = ({ navigation, route }) => {
  const [seeTrailer, setSeeTrailer] = useState(false);
  const [colorButton, setColorButton] = useState('#FFF');
  const [saved, setSaved] = useState(route.params.saved);

  const movie = route.params.movie;

  const handleSeeTrailer = () => {
    setSeeTrailer(!seeTrailer);
    setColorButton(colorButton === '#FFF' ? '#f5c518' : '#FFF');
  };

  const handleSavetrailer = async () => {
    if (saved) {
      await deleteMovie(movie.imdbid, () => setSaved(false));
    } else {
      await saveMovie(movie);
      setSaved(true);
    }
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
              onPress={() => navigation.navigate('Home', { saved: saved })}
              size={40}
              color="#FFF"
            />
            <Ionicons
              name={!saved ? `bookmark-outline` : `bookmark`}
              onPress={handleSavetrailer}
              size={40}
              color="#FFF"
            />
          </LinearGradient>
        </View>
      </ImageBackground>
      <MovieData movie={movie} onClickSeeTrailer={handleSeeTrailer} colorButton={colorButton} />
      <TrailerModal
        seeTrailer={seeTrailer}
        setSeeTrailerProp={handleSeeTrailer}
        idTrailer={movie.trailer.split('/').pop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  backgroundImageMovie: {
    resizeMode: 'contain',
    width: '100%',
    height: 600,
    flex: 5,
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 26,
  },
  goBackArrow: {
    width: 35,
    height: 35,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
});
