import React,{useState} from 'react'
import { View, StyleSheet, TextInput, TextInputComponent, Text, Image, Button, TouchableOpacity, Alert,ImageBackground } from 'react-native'
import logo from "./icon.png"
import { getHeaderTitle } from '@react-navigation/elements';
import Cadastro from '../../Pages/Cadastro';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import back from "../../../assets/Fundo.png";
import FormCad from '../FormCad/FormCad';

import api from '../../api.js';


function Form() {
  const navigation = useNavigation();
  const [email,setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin(event){
    event.preventDefault()
    try{
      const data = {
        email,senha
      };
      const response = await api.post('/login', data)
  
      Alert.alert(`Usuario logado com sucesso. Bem-vindo(a) ao sistema `)

      //setEmail('');
      //setSenha('');

    } catch(error){
      Alert.alert(`Erro ${error}`)
    }
      }


  return (
    <React.Fragment>
      <ImageBackground source={back} resizeMode="cover" style={styles.image}>
          <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>
            <TextInput 
                  placeholder='Email'style={styles.input}
                  value={email}
                  onChangeText={e => setEmail(e)}
                  ></TextInput>

            <TextInput 
                  placeholder='Senha'style={styles.input}
                  secureTextEntry={true}
                  value={senha}
                  onChangeText={e=>setSenha(e)}
              ></TextInput>
            <TouchableOpacity onPress={handleLogin}><Text style={styles.entrar}>Entrar</Text></TouchableOpacity>
          </View>
          <FormCad></FormCad>
        </ImageBackground>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
    container:{
        width : "85%",
        height : "55%",
        backgroundColor : "#659ee4",
        borderRadius : 15,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#5e5e5e'
    },
    input:{
      margin : 10,
      backgroundColor : 'white',
      width : '80%',
      height : 35,
      borderWidth : 1,
      borderColor : "#5e5e5e",
      borderRadius : 8,
      fontSize: 15,
      padding: 5
    },
    title:{
      backgroundColor : "#5271ff",
      fontSize : 30,
      width : 130,
      textAlign : 'center',
      marginTop : -80,
      marginBottom : 50,
      color : 'white',
      // borderColor : '#5e5e5e',
      // borderWidth : 2,
      borderRadius : 5,
    },
    entrar:{
      backgroundColor : "#5271ff",
        fontSize : 25,
        width : 140,
        height : 40,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 30,
        color : 'white',
        marginTop : 50,
        
        // alignItems : 'center'
    },
    image :{
      flex : 1,
      justifyContent : 'center',
      width : "100%",
      alignItems : 'center',
    }
    
})

export default Form
