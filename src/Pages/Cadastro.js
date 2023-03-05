import React from 'react'
import { View, StyleSheet, TextInput, TextInputComponent, Text, Image, Button, TouchableOpacity } from 'react-native'

function Cadastro() {
  return (
    <React.Fragment>
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput placeholder='Nome'style={styles.input}></TextInput>
                <TextInput placeholder='Telefone'style={styles.input} secureTextEntry={true}></TextInput>
                <TextInput placeholder='Data de Nascimento'style={styles.input}></TextInput>
                <TextInput placeholder='Email'style={styles.input} secureTextEntry={true}></TextInput>
                <TextInput placeholder='Senha'style={styles.input}></TextInput>
                <TextInput placeholder='Confirmar senha'style={styles.input} secureTextEntry={true}></TextInput>
                <TouchableOpacity><Text style={styles.entrar}>Cadastrar</Text></TouchableOpacity>{/**On press vai dentro do touchable oppacity*/}
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