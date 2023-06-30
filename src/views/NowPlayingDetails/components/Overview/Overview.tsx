import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type OverviewProps = {
  overview: string;
};
const Overview = (props: OverviewProps) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={!readMore ? 3 : undefined}>
        {props.overview}
      </Text>
      <Pressable
        style={styles.buttonReadMore}
        onPress={() => {
          setReadMore(!readMore);
        }}
      >
        <Text style={{ color: '#FFF' }}>Read More</Text>
        {!readMore ? (
          <Ionicons name="chevron-down-outline" size={25} color={'#FFF'} />
        ) : (
          <Ionicons name="chevron-up-outline" size={25} color={'#FFF'} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 30, alignItems: 'center' },
  text: { textAlign: 'center', color: '#c5c3c3' },
  buttonReadMore: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Overview;
