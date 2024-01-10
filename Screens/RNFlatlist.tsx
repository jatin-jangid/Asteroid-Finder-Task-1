import { StackNavigationState, useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button, ScrollView} from 'react-native';
import pokemonList from '../data.json';
function HomeScreen( { navigation }:any ) {
  // const navigation = useNavigation();
  
  return (
    <ScrollView>
      <View style={style.container}>
      {
        pokemonList.map(pokemon=>{
          return(
            <View key={pokemon.id}>
              <Text style={style.text}>Type : {pokemon.type}</Text>
              <Text style={style.text}>Name : {pokemon.name}</Text>
            </View>
          );
        })
      }
    </View>
    </ScrollView>
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    // marginBottom: 16,
  },
});
