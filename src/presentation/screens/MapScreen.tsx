import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { useAppSelector } from '../../app/hooks';
import { MapNavigator } from '../navigation/MapNavigator';
import { AppMap } from '../components/AppMap';

export const MapScreen = () => {
  const origin = useAppSelector(state => state.nav.origin);

  return (
    <SafeAreaView>
      <Text>MapScreen</Text>
      <AppMap />
      <View style={{ height: 300}}>
        <MapNavigator />
      </View>
    </SafeAreaView>
  );
};
