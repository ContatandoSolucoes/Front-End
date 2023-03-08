
import React from 'react'
import { View, StyleSheet, TextInput, TextInputComponent, Text, Image, Button, TouchableOpacity, Alert } from 'react-native'

import api from '../api.js'
import useState from 'react-hook-use-state'

function Cadastro() {

    const [email,setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [nome_usuario, setUserName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    
    async function handleRegister(event){
      event.preventDefault()
      try{
        const data = {
          nome_usuario,email,senha,telefone,nascimento
        };
        const response = await api.post('/user', data)
    
        Alert.alert(`Usuario cadastrado com sucesso. Bem-vindo(a) ao sistema ${nome_usuario}`)
  
        //setEmail('');
        //setSenha('');
        //setUserName('');
        //setTelefone('');
        //setNascimento('');
      } catch(error){
        Alert.alert(`Erro no cadastro. Tente novamente. \nCodigo Erro: ${error}`)
      }
    }

  return (
    <React.Fragment>
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Cadastro</Text>
                
                <TextInput 
                placeholder='Nome'style={styles.input}
                value={nome_usuario}
                onChangeText={e => setUserName(e)}
                ></TextInput>

                <TextInput 
                placeholder='Telefone'style={styles.input}
                value={telefone}
                onChangeText={e => setTelefone(e)}
                ></TextInput>
                
                <TextInput 
                placeholder='Data de Nascimento'style={styles.input}
                value={nascimento}
                onChangeText={e => setNascimento(e)}
                ></TextInput>

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
                
                <TextInput 
                placeholder='Confirmar senha'style={styles.input}
                secureTextEntry={true}
                value={confirmaSenha}
                onChangeText={e => setConfirmaSenha(e)}
                ></TextInput>
                
                <TouchableOpacity onPress={handleRegister}><Text 
                style={styles.entrar}
                >Cadastrar</Text></TouchableOpacity>
            </View>
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
    form:{
        width : "85%",
        height : "75%",
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
      title:{
        backgroundColor : "#13827c",
        fontSize : 30,
        width : 150,
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
          width : 150,
          height : 40,
          textAlign : 'center',
          borderColor : '#5e5e5e',
          borderWidth : 2,
          borderRadius : 30,
          color : 'white',
          marginTop : 50,
          
          // alignItems : 'center'
      }
  });

export default Cadastro
