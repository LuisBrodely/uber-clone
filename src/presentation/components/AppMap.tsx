import MapView, { Marker } from 'react-native-maps'
import { useAppSelector } from '../../app/hooks'

export const AppMap = () => {
  const origin = useAppSelector(state => state.nav.origin)

  return (
    <MapView
        style={{ height: 300 }}
        mapType="none"
        region={{
          latitude: origin.point?.lat || 37.78825,
          longitude: origin.point?.lng || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {origin.point && (
          <Marker
            coordinate={{
              latitude: origin.point.lat,
              longitude: origin.point.lng,
            }}
            title='Origin'
            description={origin.description}
            identifier='origin'
          />
        )}
      </MapView>
  )
}