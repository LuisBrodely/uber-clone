import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style = {tw`h-full pt-8`}>
      <View style = {tw`p-5`}>
        <Image
            style = {{width: 100, height: 100, resizeMode: 'contain'}}
            source = {{uri:'https://1000marcas.net/wp-content/uploads/2020/10/Uber-Logo.png'}}
        />
        <GooglePlacesAutocomplete
          placeholder = 'Where from?'
          nearbyPlacesAPI = 'GooglePlacesSearch'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details.geometry.location, data.description);
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
          }}
          fetchDetails = {true}
          styles = {{
            container: {
              flex: 0,
              marginBottom: 10
            },
            textInput: {
              fontSize: 18
            }
          }}
          returnKeyType = {'search'}
          enablePoweredByContainer = {false}
          minLength = {2}
          query={{
            key: '.ENV-KEY-GOOGLE',
            language: 'en',
          }}
          debounce = {200}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;