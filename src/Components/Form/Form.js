import React,{useState} from 'react'
import { View, StyleSheet, TextInput, TextInputComponent, Text, Image, Button, TouchableOpacity } from 'react-native'
import logo from "./icon.png"
import { getHeaderTitle } from '@react-navigation/elements';
import Cadastro from '../../Pages/Cadastro';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Form() {

  const [email,setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const touch=()=>{
    event.preventDefault()
    try{
      const user = {
        nome, email, senha, telefone, nascimento
      };
      const response = api.post('/user', user)
  
      Alert.alert(`Usuario cadastrado com sucesso. Bem-vindo(a) ao sistema ${nome}`)

      setEmail('');
      setSenha('');
    } catch(error){
      Alert.alert(`Erro no cadastro. Tente novamente. \nCodigo Erro: ${error}`)
    }

  }
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <Image source={logo} style={styles.img}/>
        <View style={styles.container}>
          <Text style={styles.title}>LOGIN</Text>
          <TextInput 
                placeholder='Email'style={styles.input}
                value={email}
                onChange={e => setEmail(e.target.value)}
          ></TextInput>

          <TextInput 
                placeholder='Senha'style={styles.input}
                secureTextEntry={true}
                value={senha}
                onChange={e=>setSenha(e.target.value)}
          ></TextInput>
          <TouchableOpacity onPress={touch}><Text style={styles.entrar}>Entrar</Text></TouchableOpacity>
        </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
    container:{
        width : "85%",
        height : "55%",
        backgroundColor : "#57bee7",
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
    },
    img:{
      width : 110,
      height : 110,
      marginBottom : 10,
    
    },
    title:{
      backgroundColor : "#13827c",
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
      backgroundColor : "#13827c",
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
    }
    
})

export default Form
