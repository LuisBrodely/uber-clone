import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import { useAppDispatch } from '../../app/hooks';
import { setOrigin, setDestination } from '../../features/nav/navSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigation/RootNavigator';
import { DirectionButton } from '../components/DirectionButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../features/nav/navSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const origin = useSelector(selectOrigin);

  return (
    <SafeAreaView
      style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 24, flex: 1 }}>
      <View style={{ marginTop: 32 }}>
        <GooglePlacesAutocomplete
          renderLeftButton={() => (
            <Icon
              name="search"
              color="#000000"
              size={22}
              style={{ marginTop: 12 }}
            />
          )}
          placeholder="¿A dónde vas?"
          textInputProps={{
            placeholderTextColor: '#1a1a1a',
          }}
          styles={placesAutocomplete}
          onPress={(
            data: GooglePlaceData,
            details: GooglePlaceDetail | null = null,
          ) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            dispatch(
              setOrigin({
                description: data.description,
                point: details?.geometry.location
                  ? details.geometry.location
                  : null,
              }),
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: process.env.API_KEY_GOOGLE,
            language: 'es',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
        />
        <View style={{ marginBottom: 32 }}>
          <DirectionButton />
          <DirectionButton />
          <DirectionButton />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Sugerencias</Text>
          <Text style={styles.subtitle}>Ver todo</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Pressable
            style={{...styles.card, opacity: !origin.point ? 0.6 : 1}}
            disabled={!origin.point}
            onPress={() => navigation.navigate('Map')}>
            <Image
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350380/assets/2f/29d010-64eb-47ac-b6bb-97503a838259/original/UberX-%281%29.png"
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Viaje</Text>
          </Pressable>
          <View style={{...styles.card, opacity: 0.6}}>
            <Image
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Servicios</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  card: {
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    flex: 1,
  },
  cardImage: {
    width: 100,
    height: 50,
    alignSelf: 'flex-end',
  },
  cardText: {
    fontSize: 12,
    marginTop: 10,
  },
});

const placesAutocomplete = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    backgroundColor: '#EEEEEE',
    color: '#1a1a1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInputContainer: {
    paddingTop: 4,
    paddingHorizontal: 20,
    backgroundColor: '#EEEEEE',
    borderRadius: 100,
  },
});
