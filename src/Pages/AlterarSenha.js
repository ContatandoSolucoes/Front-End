import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import back from "../../assets/Fundo.png"

function AlterarSenha() {



  return (
    <React.Fragment>
      <ImageBackground source={back} resizeMode="cover" style={styles.image}>

        <Text style={styles.title}>Recuperar Senha</Text>

        <View style={styles.container}>

          {/* inputs que pegam os dados */}
          
          <TextInput style={styles.inputCódigo} placeholder="Coloque seu email"/>

          <TextInput style={styles.inputCódigo} placeholder="Coloque o código"/>

          <TextInput style={styles.inputNovaSenha} placeholder="Digite sua nova senha"/>

          {/* botão para acionar a function para Alterar senha */}
          
          <TouchableOpacity onPress={}>
            <Text style={styles.entrar}> Alterar</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  image:{
    flex : 1,
    width : "100%",
  },
  container: {
    width : "85%",
    height : "55%",
    backgroundColor : "#659ee4",
    borderRadius : 15,
    borderWidth : 2,
    borderColor : '#5e5e5e',
    marginTop: "14%",
    marginLeft: "8%"
  },
  title:{
    backgroundColor : "#5271ff",
    fontSize : 30,
    width : 250,
    textAlign : 'center',
    color : 'white',
    borderColor : '#5e5e5e',
    borderWidth : 2,
    borderRadius : 5,
    marginTop: "16%",
    marginLeft: "19%"
  },
  inputCódigo:{
    backgroundColor : 'white',
    height : 35,
    borderWidth : 1,
    borderColor : "#5e5e5e",
    borderRadius : 8,
    fontSize: 15,
    padding: 5,
    width : '80%',
    marginTop: "30%",
    marginLeft: "10%",
  },
  inputNovaSenha:{
    backgroundColor : 'white',
    height : 35,
    borderWidth : 1,
    borderColor : "#5e5e5e",
    borderRadius : 8,
    fontSize: 15,
    padding: 5,
    width : '80%',
    marginTop: "15%",
    marginLeft: "10%",
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
  }
})

export default AlterarSenha