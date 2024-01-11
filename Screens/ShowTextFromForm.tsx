import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {useEffect, useState} from 'react';

function ShowTextFromForm({navigation, route}: any) {
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
  return (
    <ImageBackground
      source={require('../Assets/Images/background3.jpeg')}
      style={{flex: 1, width: mobileW, height: mobileH}}>
      <Image
        style={{
          alignSelf: 'center',
          height: 200,
          width: 200,
          resizeMode: 'contain',
        }}
        source={require('../Assets/Images/NASA.png')}></Image>

      <View style={style.container}>
        {/* <Text style={style.text}>Asteroid Name : {Asteroid.name}</Text>
            <Text style={style.text}>Asteroid ID : {Asteroid.id}</Text>
          <Text style={style.text}>Asteroid Desigantion : {Asteroid.designation}</Text> */}
        <Text style={style.text}>Asteroid Name : </Text>
        <Text style={style.TextinsideText}>{data.name}</Text>
        <Text style={style.text}>Asteroid ID :</Text>
        <Text style={style.TextinsideText}>{data.id}</Text>
        <Text style={style.text}>Asteroid Designation :</Text>
        <Text style={style.TextinsideText}>{data.designation}</Text>
      </View>
    </ImageBackground>
  );
}
export default ShowTextFromForm;

const style = StyleSheet.create({
  container: {
    // flex: 1,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'white',
    margin: 10,

    //   paddingTop:StatusBar.currentHeight,
  },
  text: {
    marginTop: 10,
    // margin:5,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    // borderWidth:1,s
    // borderColor:'white',
    // backgroundColor:'white',
    //   fontWeight: 'bold',
    color: 'white',
    //   marginBottom: 16,
    paddingLeft: 10,
  },
  input: {
    color: 'black',
    fontSize: 20,
    margin: 10,
    paddingLeft: 15,
    borderWidth: 3,
    borderRadius: 20,
  },
  TextinsideText: {
    // marginTop: 10,
    margin: 5,
    fontSize: 25,
    // borderWidth:1,s
    // borderColor:'white',
    // backgroundColor:'white',
    //   fontWeight: 'bold',
    color: 'white',
    //   marginBottom: 16,
    paddingLeft: 10,
  },
});
