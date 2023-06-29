import * as React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import useMoviesStore from '../../../../store/moviesStore';
import { styles } from './NowPlaying.styles';

function NowPlaying() {
  const window = Dimensions.get('window');
  const PAGE_WIDTH = window.width;
  const HEIGHT_WIDTH = window.height;
  const [moviesPlayingNow] = useMoviesStore((state) => [state.moviesPlayingNow]);

  return (
    <Carousel
      loop
      width={400}
      height={HEIGHT_WIDTH * 0.75}
      autoPlay={true}
      pagingEnabled={false}
      snapEnabled={false}
      mode="parallax"
      data={moviesPlayingNow}
      scrollAnimationDuration={3000}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: -80,
          }}
        >
          <Image
            style={{ flex: 1, borderRadius: 25 }}
            source={{ uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` }}
          />
          <Text style={styles.title} numberOfLines={1}>{item.original_title}</Text>
          <View style={styles.metricsContainer}>
            <Text style={styles.metricsInfo}>{item.vote_count}</Text>
            <Text style={styles.metricsInfo}>{item.vote_average}</Text>
            <Text style={styles.metricsInfo}>{item.popularity}</Text>
          </View>
          <Pressable style={styles.moreInfoButton}>
            <Text style={styles.buttonText}>  More Info</Text>
          </Pressable>
        </View>
      )}
    />
  );
}

export default NowPlaying;
