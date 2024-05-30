import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { MapStackParamList } from '../navigation/MapNavigator';
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import { setDestination } from '../../features/nav/navSlice';
import { useAppDispatch } from '../../app/hooks';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DirectionButton } from './DirectionButton';

const favoritesPlaces = [
  {
    place: 'Universidad Politécnica de Chiapas',
    direction: 'Las Brisas, Suchiapa, Chis., México',
  },
  {
    place: 'Aeropuerto Internacional Ángel Albino Corzo',
    direction: 'Tramo Carretero Vergel Aeropuerto, Francisco Sarabia, Tuxtla Gutiérrez, Chis., México',
  },
];

type Props = NativeStackScreenProps<MapStackParamList, 'Navigate'>;

export const NavigateCard = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a trip</Text>
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
          dispatch(
            setDestination({
              description: data.description,
              point: details?.geometry.location
                ? details.geometry.location
                : null,
            }),
          );
          navigation.navigate('RideOptions');
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
      <View style={{ marginTop: 12 }}>
        {favoritesPlaces.map((place, index) => (
          <DirectionButton key={index} {...place} />
        ))}
      </View>
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
    marginBottom: 20,
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
