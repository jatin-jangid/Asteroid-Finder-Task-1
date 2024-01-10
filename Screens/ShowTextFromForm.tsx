import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from 'react';

function ShowTextFromForm({navigation, route}:any){
    const {data} = route.params;
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
        <View>
            {/* <Text style={style.text}>Asteroid Name : {Asteroid.name}</Text>
            <Text style={style.text}>Asteroid ID : {Asteroid.id}</Text>
            <Text style={style.text}>Asteroid Desigantion : {Asteroid.designation}</Text> */}
            <Text style={style.text}>Asteroid Name : {data.name}</Text>
            <Text style={style.text}>Asteroid ID : {data.id}</Text>
            <Text style={style.text}>Asteroid Desigantion : {data.designation}</Text>
        </View>
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
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    //   marginBottom: 16,
    //   padding:15,
  
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