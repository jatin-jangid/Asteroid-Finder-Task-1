import React, {Component} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';

interface State {
  name: string;
  data: DataItem[];
}

interface DataItem {
  id: string;
}

type NavigationPropType = NavigationProp<
  Record<string, object | undefined>,
  'DataFromForm'
>;

class RNForm extends Component<{navigation: NavigationPropType}, State> {
  constructor(props: Readonly<{navigation: NavigationPropType}>) {
    super(props);
    this.state = {
      name: '',
      data: [],
    };
  }

  componentDidMount() {
    let URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=6vDonMsdUcHytDq0KOoUHaibANFJhfVBNcP884wK`;
    fetch(URL)
      .then(Response => Response.json())
      .then(response => {
        this.setState({data: response.near_earth_objects});
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickRandom = () => {
    let randomIndex = Math.floor(Math.random() * (20 - 1) + 1);
    let found = 0;
    this.state.data.forEach(Asteroid => {
      if (Asteroid.id === this.state.data[randomIndex].id) {
        found = 1;
        this.props.navigation.navigate('DataFromForm', {
          data: Asteroid,
        });
      }
    });
    if (found === 0) {
      Alert.alert('Invalid ID');
    }
  };

  onClickSubmit = () => {
    let found = 0;
    this.state.data.forEach(Asteroid => {
      if (Asteroid.id === this.state.name) {
        found = 1;
        this.props.navigation.navigate('DataFromForm', {
          data: Asteroid,
        });
      }
    });
    if (found === 0) {
      Alert.alert('Invalid ID', 'Please Enter a valid ID');
    }
  };

  render() {
    const mobileW = Dimensions.get('window').width;
    const mobileH = Dimensions.get('window').height;

    return (
      <View style={style.container}>
        <ImageBackground
          source={require('../Assets/Images/background3.jpeg')}
          style={{flex: 1, width: mobileW, height: mobileH}}>
          <Image
            style={{
              marginTop: 40,
              width: 'auto',
              height: 200,
              resizeMode: 'contain',
            }}
            source={require('../Assets/Images/NasaLogo.png')}></Image>
          <Text
            style={{
              marginTop: -35,
              color: 'white',
              alignSelf: 'center',
              fontSize: 20,
            }}>
            Asteroid Finder by{' '}
            <Image
              style={{height: 60, width: 60, resizeMode: 'contain'}}
              source={require('../Assets/Images/NASA.png')}></Image>
          </Text>

          <TextInput
            placeholder="Enter ID"
            keyboardType="numeric"
            maxLength={7}
            placeholderTextColor={'white'}
            style={style.input}
            value={this.state.name}
            onChangeText={name => this.setState({name})}
          />

          <TouchableOpacity
            disabled={this.state.name.length !== 7}
            style={
              this.state.name.length !== 7 ? style.disabledButton : style.button
            }
            onPress={this.onClickSubmit}>
            <Text style={style.buttonText}>SUBMIT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.randomButton}
            onPress={this.onClickRandom}>
            <Text style={style.buttonText}>RANDOM</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default RNForm;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    backgroundColor: '#96272f',
    width: 150,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: 'rgba(150, 39, 47,0.3)',
    width: 150,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  randomButton: {
    backgroundColor: '#33338f',
    width: 150,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
});
