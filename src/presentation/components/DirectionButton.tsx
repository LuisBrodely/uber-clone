import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface DirectionButtonProps {
  direction: string;
  place: string;
}

export const DirectionButton = ({ direction, place }: DirectionButtonProps) => {
  return (
    <Pressable style={styles.button}>
      <View style={styles.circle}>
        <Icon name="location-on" size={16} color="#000000"></Icon>
      </View>
      <View>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
					{place}
				</Text>
        <View style={styles.separator} />
        <Text style={styles.textDescription} numberOfLines={1} ellipsizeMode="tail">{direction}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    height: 85,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  circle: {
    height: 36,
    width: 36,
    backgroundColor: '#EEEEEE',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
		width: 275
  },
  textDescription: {
    fontSize: 13,
		width: 275
  },
  separator: {
    height: 2,
  },
});
