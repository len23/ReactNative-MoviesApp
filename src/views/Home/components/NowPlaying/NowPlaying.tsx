import * as React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import useMoviesStore from '../../../../store/moviesStore';
// import { styles } from './NowPlaying.styles';
import CarouselContent from './components/CarouselContent/CarouselContent';
import { IMoviePlayingNow } from '../../../../types/IMoviePlayingNow';

type NowPlayingProps = {
  onMoreInfoPress: (movie: IMoviePlayingNow) => void;
};

function NowPlaying(props: NowPlayingProps) {
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
        <CarouselContent movie={item} onMoreInfoPress={() => props.onMoreInfoPress(item)} />
      )}
    />
  );
}

export default NowPlaying;
