import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { Transaction } from '../../../../types/IMovieProviders';
import { transactionsStyles } from './Transactions.styles';

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

const styles = { ...transactionsStyles };

const Transactions = (props: TransactionsProps) => {
  const { transactionsObject } = props;
  const transactionKeys = Object.keys(transactionsObject);

  const renderItem = ({ item }: { item: string }) => {
    if (item !== 'link') {
      return (
        <View>
          <Text style={styles.transactionTTitle}>{_geTransaction(item)}</Text>
          <View style={styles.providersContainer}>
            {transactionsObject[item].map((provider, index) => (
              <Pressable key={`${item}_${provider.provider_name}_${index}`}>
                <Image
                  source={{
                    uri: `https://www.themoviedb.org/t/p/original/${provider.logo_path}`,
                  }}
                  style={styles.providerImage}
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
    <View style={{ marginTop: -30, marginHorizontal: 20 }}>
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
