import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground, Text, View } from 'react-native';
import { HomeStackParamList } from '../../types/Stacks';

type NowPlayingDetailsProps = NativeStackScreenProps<HomeStackParamList, 'NowPlayingDetails'>;
const NowPlayingDetails = (props: NowPlayingDetailsProps) => {
  const movie = props.route.params.movieNowPlaying;
  return (
    <ImageBackground
      style={{ flex: 1 }}
      imageStyle={{ resizeMode: 'cover' }}
      source={{ uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}` }}
    >
      <LinearGradient
        style={{ flex: 1 }}
        colors={[
          'rgba(86, 113, 142, 0.6)',
          'rgba(94, 137, 201, 1)',
          'rgba(94, 137, 201, 1)',
          'rgba(67, 87, 158, 1)',
        ]}
        locations={[0.05, 0.4, 0.65, 1]}
      >
        <Text>{movie.original_title}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default NowPlayingDetails;
// uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`,
