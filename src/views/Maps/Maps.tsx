import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, {
  LatLng,
  MapMarker,
  MapStyleElement,
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from 'react-native-maps';
import useAuthStore from '../../store/authStore';
import { mapStyle, markers } from '../../constants/MapsConstants';
import { styles } from './Maps.syles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/Stacks';
import { useEffect, useState } from 'react';
import { getCurrentPositionAsync } from 'expo-location';
import { getDirections } from '../../services/GoogleApiService';

type MapsProps = NativeStackScreenProps<HomeStackParamList, 'Maps'>;
const Maps = (props: MapsProps) => {
  const destination = props.route.params ? props.route.params.marker?.latlng : null;
  const [userLocation] = useAuthStore((state) => [state.userLocation]);
  const [coordinates, setCoordinates] = useState<LatLng[]>();

  useEffect(() => {
    const fetchCoords = async (destination: LatLng, userLocation: LatLng) => {
      const end = { latitude: destination.latitude, longitude: destination.longitude };
      const coords = await getDirections(userLocation, end);
      setCoordinates(coords);
    };
    if (destination && userLocation) {
      fetchCoords(destination, userLocation);
    }
  }, [userLocation]);
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
          {coordinates && <Polyline coordinates={coordinates} strokeWidth={5} strokeColor="red" />}
        </MapView>
      )}
    </View>
  );
};

export default Maps;
