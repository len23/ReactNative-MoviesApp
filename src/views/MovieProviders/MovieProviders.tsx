import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import ContImgBckgrd from '../../containers/ContImgBckgrd/ContImgBckgrd';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/Stacks';
import { useEffect, useState } from 'react';
import { getMovieProviders } from '../../services/movieProviders';
import { ICountryProvider } from '../../types/IMovieProviders';
import Transactions from './components/Transactions/Transactions';

export type MovieProvidersProps = NativeStackScreenProps<HomeStackParamList, 'MovieProviders'>;

const MovieProviders = (props: MovieProvidersProps) => {
  const [providerData, setProviderData] = useState<ICountryProvider>();
  const [country, setCountry] = useState<string>('US');

  useEffect(() => {
    const fecthData = async () => {
      const results = await getMovieProviders(props.route.params.movie.imdbid);
      setProviderData(results);
    };
    fecthData();
  }, []);
  return (
    <ContImgBckgrd
      gradientColors={['rgba(3,37,65, 0.6)', 'rgba(3,37,65, 0.8)']}
      imgPath={providerData?.image}
    >
      <View style={{ marginTop: 30 }}>
        {providerData ? (
          <Transactions transactionsObject={providerData.results[country]} />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </ContImgBckgrd>
  );
};

export default MovieProviders;
