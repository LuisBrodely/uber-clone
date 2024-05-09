import { RootStackParamList } from './src/presentation/navigation/RootNavigator';
import { MapStackParamList } from './src/presentation/navigation/MapNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface MapParamList extends MapStackParamList {}
  }
}
