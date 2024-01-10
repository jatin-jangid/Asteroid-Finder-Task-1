import { StackNavigationState, useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';

function HomeScreen( { navigation }:any ) {
  // const navigation = useNavigation();
  
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Text style={style.text}>Home Screen</Text>
      </TouchableOpacity>
      <Button title='Go to Details' onPress={()=> {navigation.navigate("Details",{
        name:'Namit'
      })}}/>
      <Button title='Go to RNFlatlist' onPress={()=> {navigation.navigate("RNFlatlist")}}/>
    </View>
  );
}

export default HomeScreen;


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
});
