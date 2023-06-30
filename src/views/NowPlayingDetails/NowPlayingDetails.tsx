import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text } from 'react-native';

const NowPlayingDetails = () => {
  return (
    <LinearGradient colors={['rgba(103, 156, 214, 1)', 'rgba(66, 82, 161, 1)']}>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w1920_and_h800_bestv2//hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
        }}
      >
        <Text>Esto es eso !!!!!</Text>
      </ImageBackground>
    </LinearGradient>
  );
};

export default NowPlayingDetails;
