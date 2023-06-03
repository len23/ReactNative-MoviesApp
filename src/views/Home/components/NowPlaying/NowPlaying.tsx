import * as React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import useMoviesStore from '../../../../store/moviesStore';
import { log } from 'react-native-reanimated';

function NowPlaying() {
  const window = Dimensions.get('window');
  const PAGE_WIDTH = window.width;
  const HEIGHT_WIDTH = window.height;
  const [moviesPlayingNow] = useMoviesStore((state) => [state.moviesPlayingNow]);

  return (
    <Carousel
      loop
      width={400}
      height={HEIGHT_WIDTH * 0.7}
      autoPlay={true}
      pagingEnabled={false}
      snapEnabled={false}
      mode="parallax"
      data={moviesPlayingNow}
      scrollAnimationDuration={3000}
      onSnapToItem={(index) => console.log('current index:', index)}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: -60,
          }}
        >
          <Image
            style={{ flex: 1, borderRadius: 25 }}
            source={{ uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` }}
          />
          <Text style={{ textAlign: 'center', fontSize: 30 }}>{item.original_title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text>{item.vote_count}</Text>
            <Text>{item.vote_average}</Text>
            <Text>{item.popularity}</Text>
          </View>
          <Pressable>
            <Text>Buy Tickets</Text>
          </Pressable>
        </View>
      )}
    />
  );
}

export default NowPlaying;
