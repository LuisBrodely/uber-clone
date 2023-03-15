import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style = {tw`h-full pt-8`}>
      <View style = {tw`p-5`}>
        <Image
            style = {{width: 100, height: 100, resizeMode: 'contain'}}
            source = {{uri:'https://1000marcas.net/wp-content/uploads/2020/10/Uber-Logo.png'}}
        />
        
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;