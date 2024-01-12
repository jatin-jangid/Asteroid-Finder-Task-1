import React, {Component} from 'react';
import {RouteProp} from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
interface Params {
  data: {
    name: string;
    id: string;
    designation: string;
    // Add other fields as needed
  };
}

type Route = RouteProp<Record<string, Params>, string>;

class ShowTextFromForm extends Component<{route: Route}> {
  render() {
    const {data} = this.props.route.params;
    const mobileW = Dimensions.get('window').width;
    const mobileH = Dimensions.get('window').height;

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
}

export default ShowTextFromForm;

const style = StyleSheet.create({
  container: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'white',
    margin: 10,
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    color: 'white',
    paddingLeft: 10,
  },
  TextinsideText: {
    margin: 5,
    fontSize: 25,
    color: 'white',
    paddingLeft: 10,
  },
});
