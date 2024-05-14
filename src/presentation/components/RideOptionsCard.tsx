import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { MapStackParamList } from '../navigation/MapNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAppSelector } from '../../app/hooks';
import { selectTravelTimeInformation } from '../../features/nav/navSlice';

type Props = NativeStackScreenProps<MapStackParamList, 'RideOptions'>;

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CHARGE_RATE = 1.5;

export const RideOptionsCard = ({ navigation }: Props) => {
  const travelTimeInformation = useAppSelector(selectTravelTimeInformation)

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Pressable>
          <Icon
            name="chevron-left"
            size={30}
            color="#000000"
            onPress={handlePress}
          />
        </Pressable>
        <Text style={styles.title}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: '#ffffff',
          }}
        />
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <View style={{flex: 1}}>
              <View style={{ marginBottom: 2, flexDirection: 'row'}}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardPrice}>

                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(
                    travelTimeInformation?.duration.value *
                      SURGE_CHARGE_RATE *
                      item.multiplier /
                      100
                  )}
                </Text>
              </View>
              <Text style={styles.cardSubtitle}>{travelTimeInformation?.duration?.text} Travel time</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  cardSubtitle: {
    fontSize: 14,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
