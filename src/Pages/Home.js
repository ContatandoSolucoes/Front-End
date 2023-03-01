import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import Form from '../Components/Form/Form';
import FormCad from '../Components/FormCad/FormCad';
import React from 'react';
import logo from "../Components/Form/icon.png"



//Importando os itens que vão ser usados no react navigator stack que é o que uma tela se sobrepõe a outra
import { getHeaderTitle } from '@react-navigation/elements';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home() {
  const navigation = useNavigation();//Essa variavel é usada para usar o metodo navigate que indica a qual tela a tag vai levar

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Image source={logo} style={styles.img}></Image>
        <Text style={styles.title} >
          {`CONTATANDO SOLUÇÕES`}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}><Text style={styles.entrar}>Cadastrar-se</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')} ><Text style={styles.entrar}>Login</Text></TouchableOpacity>
      </View>


      
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 230,
    height: 200,
  },
  title:{
        backgroundColor : "#13827c",
        fontSize : 25,
        width : '80%',
        textAlign : 'center',
        color : 'white',
        // borderColor : '#5e5e5e',
        // borderWidth : 2,
        borderRadius : 5,
  },
  entrar:{
        backgroundColor : "#13827c",
          fontSize : 25,
          width : 150,
          height : 40,
          textAlign : 'center',
          borderColor : '#5e5e5e',
          borderWidth : 2,
          borderRadius : 30,
          color : 'white',
          marginTop : 50,
        }

});

export default Home