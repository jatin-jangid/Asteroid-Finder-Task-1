import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { useEffect, useState } from 'react';

function ShowTextFromForm({navigation, route}:any){
    const {data} = route.params;
    const mobileW = Dimensions.get('window').width;
    const mobileH = Dimensions.get('window').height;
    // const {id} = route.params;
    // const [Asteroid, setAsteroid] = useState({id:"",name:"",designation:""});
    // useEffect(()=>{ 
    //     let URL = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=6vDonMsdUcHytDq0KOoUHaibANFJhfVBNcP884wK`
    //     fetch(URL).then(Response=>{
    //     return Response.json();
    //     }).then(data => {
    //         console.log(data);
    //     setAsteroid(data);
    // }).catch(error=>{
    //     console.log(error);
    // })
    // },[])
    return(
      <ImageBackground source={require("../Assets/Images/background.jpeg")} style={{flex:1,width:mobileW,height:mobileH}}>

        <View>
            {/* <Text style={style.text}>Asteroid Name : {Asteroid.name}</Text>
            <Text style={style.text}>Asteroid ID : {Asteroid.id}</Text>
          <Text style={style.text}>Asteroid Desigantion : {Asteroid.designation}</Text> */}
            <Text style={style.text}>Asteroid Name : {data.name}</Text>
            <Text style={style.text}>Asteroid ID : {data.id}</Text>
            <Text style={style.text}>Asteroid Designation : {data.designation}</Text>
        </View>
          </ImageBackground>
        );
}
export default ShowTextFromForm;

const style = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    //   paddingTop:StatusBar.currentHeight,
    },
    text: {
      marginTop:10,
      // margin:5,
      marginLeft:20,
      marginRight:20,
      fontSize: 20,
      borderWidth:1,
      borderColor:'white',
      backgroundColor:'white',
      borderRadius:10,
    //   fontWeight: 'bold',
      color: 'black',
    //   marginBottom: 16,
      paddingLeft:10
  
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