import { View, Text, Button } from 'react-native'
import React from 'react'
import { MapStackParamList } from '../navigation/MapNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<MapStackParamList, 'RideOptions'>;

export const RideOptionsCard = ({ navigation }: Props) => {
  return (
    <View>
      <Text>RideOptionsCard</Text>
      <Button
        onPress={() => navigation.navigate('Navigate')}
        title="Navigate"
      ></Button>
    </View>
  )
}