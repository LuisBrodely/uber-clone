import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map'

const MapScreen = () => {
  return (
    <View>
      <View style = {tw`h-1/2`}>
        <Map />
      </View>
      <View style = {tw`h-1/2`}>

      </View>
    </View>
  )
}

export default MapScreen