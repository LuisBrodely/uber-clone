import MapView, { Marker } from 'react-native-maps';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from '../../features/nav/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { useEffect, useRef } from 'react';

export const AppMap = () => {
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const dispatch = useAppDispatch();

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!origin.point && !destination?.point) return;

    if (!mapRef.current) return;
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin.point || !destination?.point) return;

    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.point?.lat},${origin.point?.lng}&destinations=${destination.point?.lat},${destination.point?.lng}&key=${process.env.API_KEY_GOOGLE}`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
      } catch (error) {
        console.log(error);
      }
    };

    getTravelTime();
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={{ height: '50%' }}
      mapType="none"
      region={{
        latitude: origin.point?.lat || 37.78825,
        longitude: origin.point?.lng || -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {origin.point && destination?.point && (
        <MapViewDirections
          origin={{
            latitude: origin.point.lat,
            longitude: origin.point.lng,
          }}
          destination={{
            latitude: destination.point.lat,
            longitude: destination.point.lng,
          }}
          apikey={process.env.API_KEY_GOOGLE || ''}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin.point && (
        <Marker
          coordinate={{
            latitude: origin.point.lat,
            longitude: origin.point.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.point && (
        <Marker
          coordinate={{
            latitude: destination.point.lat,
            longitude: destination.point.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};
