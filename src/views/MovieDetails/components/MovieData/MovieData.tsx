import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import stylesMovieData from './MovieData.styles';
import { IMovie } from '../../../../types/IMovie';
import { MovieDataProps, SectionProps } from './MovieData.types';
import PresseableButton from '../../../../components/PresseableButton/PresseableButton';
import WatchButton from '../WatchButton/WatchButton';
import SectionText from '../SectionText/SectionText';

const MovieData = ({ movie, onClickSeeTrailer, colorButton, onClickWatchNow }: MovieDataProps) => {
  const styles = { ...stylesMovieData };

  const handleSeeTrailer = () => {
    onClickSeeTrailer();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.movieInfoContainer}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text>
          {movie.genre.join(', ')} {'\n'}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <SectionText variable="Rankng" value={movie.rank} />
            <SectionText variable="Year" value={movie.year} />
          </View>
          <View>
            <WatchButton onPressWatchNow={onClickWatchNow} />
          </View>
        </View>
        <Text style={{ fontSize: 17 }}>
          {'\n'}
          {movie.description}
        </Text>
        <SectionText variable="Director" value={movie.director.join(', ')} />
        <SectionText variable="Writers" value={movie.writers.join(', ')} />
      </ScrollView>
      <Pressable style={{ ...styles.playButtonContainer }} onPress={handleSeeTrailer}>
        <View style={{ ...styles.playButton, backgroundColor: colorButton }}>
          <Image
            style={styles.playImage}
            source={require('../../../../../assets/play-button.png')}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MovieData;
