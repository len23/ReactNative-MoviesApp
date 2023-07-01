import { LatLng } from 'react-native-maps';
import Polyline from '@mapbox/polyline';

export const getDirections = async (
  startLoc: LatLng,
  destinationLoc: LatLng,
): Promise<LatLng[]> => {
  let resp = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.latitude},${startLoc.longitude}&destination=${destinationLoc.latitude},${destinationLoc.longitude}&key=AIzaSyAUu0kMjRil_ogcfbSSnzW-3xql9VT0xwc`,
  );
  let respJson = await resp.json();

  let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
  let coords = points.map((point, index) => {
    return {
      latitude: point[0],
      longitude: point[1],
    };
  });
  return coords;
};
