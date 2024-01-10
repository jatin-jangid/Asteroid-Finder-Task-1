import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';

function DetailsScreen( { navigation, route }:any ) {
  const {name} = route.params;
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Text style={style.text}>Details Screen {name}</Text>
      </TouchableOpacity>
      <Button title='Go back' onPress={()=>navigation.navigate("Home")}/>
      <Button title='Update the name' onPress={()=>navigation.setParams({
        name:'Miges'
      })}/>
    </View>
  );
}

export default DetailsScreen;

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
