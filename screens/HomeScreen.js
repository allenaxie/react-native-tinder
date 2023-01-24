import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button 
      title="Go to chat screen"
      onPress={() => {
        navigation.navigate('Chat')
      }}
      />
    </View>
  )
}

export default HomeScreen