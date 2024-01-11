
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import RNFlatlist from "./Screens/RNFlatlist";
import RNForm from "./Screens/RNForm";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import ShowTextFromForm from './Screens/ShowTextFromForm';
const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RNForm'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name='RNFlatlist' component={RNFlatlist}/>
        <Stack.Screen name='RNForm' component={RNForm} options={{headerShown:false}}/>
        <Stack.Screen name='DataFromForm' component={ShowTextFromForm} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
