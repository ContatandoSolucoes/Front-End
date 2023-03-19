
import React from 'react'
import { View, StyleSheet, TextInput, TextInputComponent, Text, Image, Button, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import back from "../../assets/Fundo.png"


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

      if(email == "" || senha == "" || nome_usuario == ""|| telefone == "" || nascimento =="" ){
        alert('preencha todos os dados')
      }else{
        if(senha != confirmaSenha){
          alert('as senhas não conferem!')
        }else{
          event.preventDefault()
      try{
        const data = {
          nome_usuario,email,senha,telefone,nascimento
        };
        const response = await api.post('/user', data)
    
        Alert.alert(`Usuario cadastrado com sucesso. Bem-vindo(a) ao sistema ${nome_usuario}`)
  
        setEmail('');
        setSenha('');
        setConfirmaSenha('');
        setUserName('');
        setTelefone('');
        setNascimento('');
      } catch(error){
        Alert.alert(`Erro no cadastro. Tente novamente. \nCodigo Erro: ${error}`)
        console.log(`>>> ${error}`)
      }
        }
    }
  }

  return (
    <React.Fragment>
        <View style={styles.container}>
          <ImageBackground source={back} resizeMode="cover" style={styles.image}>
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
          </ImageBackground>
        </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
        width : "85%",
        height : "75%",
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
        padding: 10,
      },
      title:{
        backgroundColor : "#5271ff",
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
        backgroundColor : "#5271ff",
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
      },
      image :{
        flex : 1,
        justifyContent : 'center',
        width : "100%",
        alignItems : 'center',
        flexDirection : 'column'
      }
  });

export default Cadastro
