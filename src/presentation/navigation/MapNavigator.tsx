import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { MapScreen } from '../screens/MapScreen';
import { NavigateCard } from '../components/NavigateCard';
import { RideOptionsCard } from '../components/RideOptionsCard';

export type MapStackParamList = {
  Navigate: undefined;
  RideOptions: undefined;
};

export type MapStackScreenProps<Screen extends keyof MapStackParamList> =
  NativeStackScreenProps<MapStackParamList, Screen>;

const Stack = createNativeStackNavigator<MapStackParamList>();

export const MapNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Navigate" component={NavigateCard} />
      <Stack.Screen name="RideOptions" component={RideOptionsCard} />
    </Stack.Navigator>
  );
};
