import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Send package',
        image: 'https://blog.uber-cdn.com/wp-content/uploads/2020/04/Cardboard-Box_v02.png',
        screen: 'EatsScreen'
    },
]

const NavOptions = () => {
  const navigation = useNavigation()

  return (
    <FlatList
        data = {data}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem= {({item}) => (
            <TouchableOpacity 
                style = {tw`bg-gray-200 mr-2 pr-2 pl-6 pb-8 pt-4 w-40`}
                onPress = {() => navigation.navigate(item.screen)}
            >
                <View>
                    <Image
                        style = {{width: 120, height: 120, resizeMode: 'contain'}}
                        source = {{uri: item.image}}
                    />
                    <Text style = {tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        style = {tw`p-2 bg-black w-10  mt-4 rounded-full`}
                        name = 'arrow-forward'
                        type = 'material'
                        color = 'white'
                    />
                </View>
            </TouchableOpacity>
        )}
        keyExtractor = {item => item.id} 
    />
  )
}

export default NavOptions

