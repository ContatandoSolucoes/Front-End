import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';


//Import dos componentes e telas
import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Cadastro';
import Home from './src/Pages/Home';
import Perfil from './src/Pages/Perfil';

//Import do react navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    //Navigation Container é a tag que envolve as outras
    <NavigationContainer>
      {/* initial route name é para definir em qual tela teu app irá começar */}
    <Stack.Navigator initialRouteName='Home'> 
      <Stack.Screen name='Home' component={Home} options={{title:'', headerTransparent:'true',}}></Stack.Screen>{/**Essas options servem para esconder um header que aparece comum titulo toda vez que você entra naquela tela */}
      <Stack.Screen name='Cadastro' component={Cadastro} options={{title:'', headerTransparent:'true',}}></Stack.Screen>
      <Stack.Screen name='login' component={Login} options={{title:'', headerTransparent:'true',}}></Stack.Screen>
      <Stack.Screen name='Perfil' component={Perfil} options={{title:'', headerTransparent:'true',}}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
