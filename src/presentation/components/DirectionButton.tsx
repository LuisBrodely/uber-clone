import { View, Text, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const DirectionButton = () => {
  return (
    <Pressable style={styles.button}>
        <View style={styles.circle}>
					<Icon 
						name="location-on"
						size={16}
						color="#000000"
					></Icon>
				</View>
        <View>
          <Text style={styles.text}>Third Wave Coffe</Text>
					<Text style={styles.textDescription}>Sarjapur - Marathahalli Road, Countryside</Text>
					<View style={styles.separator}/>
					<Text style={styles.textDescription}>Layout, Rainbow Drive, Bengaluru, Karnataka,…</Text>
        </View>
    </Pressable>
  )
}

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
		alignItems: 'center'
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 2
	},
	textDescription: {
		fontSize: 13,
	},
	separator: {
		height: 1,
	}
})