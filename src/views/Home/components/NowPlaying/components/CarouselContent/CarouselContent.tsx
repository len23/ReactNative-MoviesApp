import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './CarouselContent.styles';
import { IMoviePlayingNow } from '../../../../../../types/IMoviePlayingNow';
import { useEffect, useState } from 'react';
import Metrics from './components/Metrics/Metrics';

const categories = require('../../../../../../constants/moviedbGenres.json');

type CarouselContentProps = {
  movie: IMoviePlayingNow;
  onMoreInfoPress: () => void;
};

const CarouselContent = (props: CarouselContentProps) => {
  const { movie } = props;
  const [movieCategories, setMovieCategories] = useState([]);
  useEffect(() => {
    setMovieCategories(
      categories.genres.filter((g: any) => movie.genre_ids.includes(g.id)).map((c: any) => c.name),
    );
  }, []);

  return (
    <View style={styles.contentContainer}>
      <Image
        style={{ flex: 1, borderRadius: 25 }}
        source={{ uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` }}
      />
      <Text style={styles.title} numberOfLines={1}>
        {movie.original_title}
      </Text>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ color: '#979797e6', fontSize: 17 }} numberOfLines={1}>
          {movieCategories.join(' \\ ')}
        </Text>
      </View>
      <View style={styles.metricsContainer}>
        <Metrics name={`Votes`} value={movie.vote_count} />
        <Metrics name={`Average`} value={movie.vote_average} />
        <Metrics name={`Popularity`} value={movie.popularity} />
      </View>
      <Pressable style={styles.moreInfoButton} onPress={props.onMoreInfoPress}>
        <Text style={styles.buttonText}> More Info</Text>
      </Pressable>
    </View>
  );
};

export default CarouselContent;
