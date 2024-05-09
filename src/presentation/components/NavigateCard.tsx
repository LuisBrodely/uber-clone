import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MapStackParamList } from '../navigation/MapNavigator';

type Props = NativeStackScreenProps<MapStackParamList, 'Navigate'>;

export const NavigateCard = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text>NavigateCard</Text>

      <Button
        onPress={() => navigation.navigate('RideOptions')}
        title="RideOptions"
      ></Button>
    </SafeAreaView>
  )
}