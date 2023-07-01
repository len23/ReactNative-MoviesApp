import { Image, Pressable, StyleSheet, View } from 'react-native';
import { markers } from '../../../../constants/MapsConstants';
import { PAGE_WIDTH } from '../../../../constants/WindowConstants';
import { Marker } from '../../../../types/IMarket';

export type CinemasProps = {
  onCinemaPress: (marker: Marker) => void;
};
const Cinemas = (props: CinemasProps) => {
  return (
    <View style={styles.container}>
      {markers.map((m) => (
        <Pressable
          onPress={() => {
            console.log('uuuuuuuuuuu');
            props.onCinemaPress(m);
          }}
          key={m.id}
        >
          <Image source={m.icon} />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: PAGE_WIDTH * 0.9,
    marginTop: 15,
  },
});

export default Cinemas;
