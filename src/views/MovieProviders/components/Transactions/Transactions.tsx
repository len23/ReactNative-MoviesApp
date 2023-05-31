import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { IProvider, Transaction } from '../../../../types/IMovieProviders';
import { useEffect, useState } from 'react';

type TransactionsProps = {
  transactionsObject: Transaction;
};

export enum TransactionEnum {
  flatrate = 'Stream',
  buy = 'Buy',
  rent = 'Rent',
  free = 'Free',
  ads = 'Ads',
}
const Transactions = (props: TransactionsProps) => {
  const { transactionsObject } = props;
  const transactionKeys = Object.keys(transactionsObject);

  const renderItem = ({ item }: { item: string }) => {
    if (item !== 'link') {
      return (
        <View key={item}>
          <Text style={{ fontSize: 30, color: '#FFF', marginTop: 35 }}>{_geTransaction(item)}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {transactionsObject[item].map((provider, index) => (
              <Pressable>
                <Image
                  source={{
                    uri: `https://www.themoviedb.org/t/p/original/${provider.logo_path}`,
                  }}
                  style={{
                    width: 65,
                    height: 65,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderRadius: 10,
                  }}
                  key={`${provider.provider_name}_${index}`}
                />
              </Pressable>
            ))}
          </View>
        </View>
      );
    }
    return <></>;
  };

  return (
    <View style={{ marginTop: 50, marginHorizontal: 20 }}>
      <FlatList
        data={transactionKeys}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const _geTransaction = (transaction: string): TransactionEnum | undefined => {
  if (transaction === 'buy') {
    return TransactionEnum.buy;
  } else if (transaction === 'flatrate') {
    return TransactionEnum.flatrate;
  } else if (transaction === 'rent') {
    return TransactionEnum.rent;
  } else if (transaction === 'free') {
    return TransactionEnum.free;
  } else if (transaction === 'ads') {
    return TransactionEnum.ads;
  }
  return;
};

export default Transactions;
