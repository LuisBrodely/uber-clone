import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../app/hooks';
import { MapNavigator } from '../navigation/MapNavigator';
import { AppMap } from '../components/AppMap';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export const MapScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <Pressable
        onPress={handlePress}
        style={styles.button}>
        <Icon name="menu" size={30} color="#000000" />
      </Pressable>
      <AppMap />
      <View style={{ height: '50%' }}>
        <MapNavigator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100,
  }
});
