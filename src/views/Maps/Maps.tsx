import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsUserLocation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Maps;
