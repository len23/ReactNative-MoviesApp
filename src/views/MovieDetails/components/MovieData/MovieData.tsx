import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import stylesMovieData from './MovieData.styles';
import { IMovie } from '../../../../types/IMovie';
import { MovieDataProps, SectionProps } from './MovieData.types';

const MovieData = ({ movie, onClickSeeTrailer, colorButton }: MovieDataProps) => {
  const styles = { ...stylesMovieData };
  const Section = ({ variable, value }: SectionProps) => (
    <Text style={styles.SectionVariable}>
      {variable}: <Text style={{ fontWeight: 'normal' }}>{value}</Text>{' '}
    </Text>
  );
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
        <Section variable="Rankng" value={movie.rank} />
        <Section variable="Year" value={movie.year} />
        <Text style={{ fontSize: 17 }}>
          {'\n'}
          {movie.description}
        </Text>
        <Section variable="Director" value={movie.director.join(', ')} />
        <Section variable="Writers" value={movie.writers.join(', ')} />
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
