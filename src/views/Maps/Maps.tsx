import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { MapMarker, MapStyleElement, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import useAuthStore from '../../store/authStore';
import { mapStyle, markers } from '../../constants/MapsConstants';
import { styles } from './Maps.syles';

const Maps = () => {
  const [userLocation] = useAuthStore((state) => [state.userLocation]);
  return (
    <View style={styles.container}>
      {!userLocation && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Retrieving your current location</Text>
          <ActivityIndicator size="large" color="#00ff00" hidesWhenStopped={true} />
        </View>
      )}
      {userLocation && (
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          userInterfaceStyle="dark"
          mapType="standard"
          showsBuildings={true}
          showsIndoors={true}
          showsUserLocation={true}
          initialRegion={{
            ...userLocation,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={marker.id}
              coordinate={marker.latlng}
              title={marker.title}
              image={marker.icon}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

export default Maps;
