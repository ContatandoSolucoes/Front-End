import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Form from '../Components/Form/Form';
import FormCad from '../Components/FormCad/FormCad';
import React from 'react';
import back from "../../assets/Inicio.png"



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
        <ImageBackground source={back} resizeMode="cover" style={styles.image}>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}><Text style={styles.entrar}>Cadastrar-se</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('login')} ><Text style={styles.entrar}>Login</Text></TouchableOpacity>
        </ImageBackground>
      </View>


      
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  entrar:{
        backgroundColor : "#5271ff",
          fontSize : 25,
          width : 170,
          height : 40,
          textAlign : 'center',
          borderColor : '#5e5e5e',
          borderWidth : 2,
          borderRadius : 30,
          color : 'white',
          marginTop : 90,
          marginBottom : -70
        },
    image :{
      flex : 1,
      justifyContent : 'center',
      width : "100%",
      alignItems : 'center',
    }

});

export default Home