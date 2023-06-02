import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ContImgBckgrd from '../../containers/ContImgBckgrd/ContImgBckgrd';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/Stacks';
import React, { useEffect, useState } from 'react';
import { getMovieProviders } from '../../services/movieProviders';
import { ICountryProvider } from '../../types/IMovieProviders';
import Transactions from './components/Transactions/Transactions';
import DropdownCountry from './components/DropdownCountry/DropDownCountry';
import { Picker } from '@react-native-picker/picker';

export type MovieProvidersProps = NativeStackScreenProps<HomeStackParamList, 'MovieProviders'>;
const Item: any = Picker.Item;

const MovieProviders = (props: MovieProvidersProps) => {
  const [providerData, setProviderData] = useState<ICountryProvider>();
  const [country, setCountry] = useState<string | number>('US');
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
      {providerData ? (
        <>
          <DropdownCountry
            selectedCountry={country}
            countryList={Object.keys(providerData.results)}
            onChangeCountry={(newCountry) => {
              setCountry(newCountry);
            }}
          />
          <Transactions transactionsObject={providerData.results[country]} />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </ContImgBckgrd>
  );
};

export default MovieProviders;
