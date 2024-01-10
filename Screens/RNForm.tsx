import { StackNavigationState, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button, StatusBar, TextInput} from 'react-native';


function RNForm({navigation, route}:any) {
  // const navigation = useNavigation();
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   let URL = ` https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=6vDonMsdUcHytDq0KOoUHaibANFJhfVBNcP884wK`
  //   fetch(URL).then(Response=>{
  //     return Response.json();
  //   }).then(data => {
  //     setData(data.near_earth_objects)
  //   }).catch(error=>{
  //     console.log(error);
  //   })
  // }, [])
  

  const onClickSubmit= ()=>{
    let URL = `https://api.nasa.gov/neo/rest/v1/neo/${name}?api_key=6vDonMsdUcHytDq0KOoUHaibANFJhfVBNcP884wK`
    fetch(URL).then(Response=>{
      return Response.json();
    }).then(data => {
      navigation.navigate("DataFromForm",{
        data:data
      })
    }).catch(error=>{
      console.log(error);
    })
  }

  return (
    <View style={style.container}>
      <TextInput keyboardType='numeric' maxLength={7} style={style.input} value={name} onChangeText={setName}/>
      <Text style={style.text}>Entered text is {name}</Text>
      {/* <Button title='Submit' onPress={()=>navigation.navigate("DataFromForm",{
        id:name
      })}/> */}
      <Button title='Submit' onPress={onClickSubmit}/>
    </View>
  );
}

export default RNForm;


const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:StatusBar.currentHeight,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
    padding:15,

  },
  input:{
    color:'black',
    fontSize:20,
    margin:10,
    paddingLeft:15,
    borderWidth:3,
    borderRadius:20
  }
});
