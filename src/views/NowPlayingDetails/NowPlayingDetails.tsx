import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Button, Image, ImageBackground, Pressable, Text, View } from 'react-native';
import { HomeStackParamList } from '../../types/Stacks';
import { SafeAreaView } from 'react-native-safe-area-context';
import Trailer from './components/Trailer/Trailer';
import Metrics from '../Home/components/NowPlaying/components/CarouselContent/components/Metrics/Metrics';
import { styles } from './NowPlayingDetails.styles';
import { getNameCategories } from '../../services/movieProviders';
import Overview from './components/Overview/Overview';
import Cinemas from './components/Cinemas/Cinemas';

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
        <SafeAreaView style={{ alignItems: 'center', paddingTop: 40 }}>
          <Text style={{ color: '#FFF', fontSize: 30, fontWeight: '600', textAlign: 'center' }}>
            {movie.original_title}
          </Text>
          <View style={styles.categories}>
            <Text style={styles.categoriesText} numberOfLines={2}>
              {getNameCategories(movie.genre_ids).join(' \\ ')}
            </Text>
          </View>
          <View style={styles.metricsContainer}>
            <Metrics name={`Votes`} value={movie.vote_count} colorText={'#656262'} />
            <Metrics name={`Average`} value={movie.vote_average} colorText={'#656262'} />
            <Metrics name={`Popularity`} value={movie.popularity} colorText={'#656262'} />
          </View>
          <Trailer idTrailer="" />
          <Overview overview={movie.overview} />
          <Cinemas />
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default NowPlayingDetails;
// uri: `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`,
