import { StackNavigationState, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text, View,ImageBackground,Dimensions, StyleSheet, TouchableOpacity, Button, StatusBar, TextInput, Image, Alert} from 'react-native';
function RNForm({navigation, route}:any) {
  // const navigation = useNavigation();
  const mobileW = Dimensions.get('window').width;
  const mobileH = Dimensions.get('window').height;
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
    //Check for the Name TextInput

  const onClickSubmit= ()=>{
    let URL = `https://api.nasa.gov/neo/rest/v1/neo/${name}?api_key=6vDonMsdUcHytDq0KOoUHaibANFJhfVBNcP884wK`
    fetch(URL)
    .then(Response=>{return Response.json();
    }).then(data => {
      navigation.navigate("DataFromForm",{
        data:data
      })
    }).catch(error=>{
      console.log(error);
      Alert.alert('ID not found!')
    })
  }

  return (
    <View style={style.container}>
      <ImageBackground source={require("../Assets/Images/background2.jpeg")} style={{flex:1,width:mobileW,height:mobileH}}>
      <Image style={{marginTop:40,width:'auto',height:200,resizeMode:'contain'}} source={require("../Assets/Images/NasaLogo.png")}></Image>
      <Text style={{marginTop:-35,color:'white',alignSelf:'center',fontSize:20}}>
        Asteroid Finder by{' '}
        <Image style={{height:60,width:60,resizeMode:'contain'}} source={require("../Assets/Images/NASA.png")}></Image>  
      </Text> 
      
      <TextInput placeholder='Enter ID' keyboardType='numeric' maxLength={7} style={style.input} value={name} onChangeText={setName}/>
      {/* <Text style={style.text}>Entered text is {name}</Text> */}
      {/* <Button title='Submit' onPress={()=>navigation.navigate("DataFromForm",{
        id:name
      })}/> */}
      <TouchableOpacity disabled={name.length!=7} style={name.length!=7?style.disabledButton:style.button} onPress={onClickSubmit}>
      <Text style={style.buttonText}>SUBMIT</Text>
    </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default RNForm;


const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop:StatusBar.currentHeight,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:40,
    color: 'white',
    marginBottom: 16,
    padding:15,

  },
  input: {
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 50,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: 250,
    alignSelf: 'center',
  },
  
  // button:{
  //   alignContent:'center',
  //   justifyContent:'center'
  // },
    button: {
      backgroundColor: '#cd000e', // Change this to your desired background color
      width:150,

      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
      alignSelf:'center'
    },
    buttonText: {
      color: '#ffffff', // Change this to your desired text color
      fontSize: 18,
      fontWeight: 'bold',
    },
    disabledButton: {
      backgroundColor: '#5c0006', // Change this to your desired background color
      width:150,

      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
      alignSelf:'center'
    },
});
