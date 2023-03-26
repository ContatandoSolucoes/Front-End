import React from 'react'
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity,ImageBackground} from 'react-native'
import back from "../../assets/Fundo.png"
import camera from "../../assets/camera.png"

function Denuncia() {
  return (
    <React.Fragment>

      <ImageBackground source={back} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Relatar Problema</Text>
        <View style={styles.container}>
          <TextInput 
          style={styles.input}
          placeholder="Endereço"
          ></TextInput>

          <TextInput 
          style={styles.input}
          placeholder="Tipo do problema"
          ></TextInput>

          <TouchableOpacity><Image source={camera} style={styles.inputImage}></Image></TouchableOpacity>

          <TextInput 
          style={styles.inputDesc}
          placeholder="Descrição"
          multiline={true}
          ></TextInput>

          <TouchableOpacity><Text style={styles.relatar}>Enviar Relato</Text></TouchableOpacity>

        </View>
      </ImageBackground>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  image :{
    flex : 1,
    width : "100%",
    alignItems : 'center',
    flexDirection : 'column',
    paddingTop: "30%"
  },
  title:{
    backgroundColor : "#5271ff",
    fontSize : 30,
    width : 300,
    textAlign : 'center',
    color : 'white',
    // borderColor : '#5e5e5e',
    // borderWidth : 2,
    borderRadius : 5,
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
  container:{
    width: "80%",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: "15%"
  },
  inputImage:{
    width:100,
    height: 100,
  },
  inputDesc:{
    margin : 10,
    backgroundColor : 'white',
    width : '90%',
    height : 150,
    borderWidth : 1,
    borderColor : "#5e5e5e",
    borderRadius : 8,
    fontSize: 15,
    padding: 10,
    alignItems: 'center'
  },
  relatar:{
    backgroundColor : "#5271ff",
    fontSize : 25,
    width : 200,
    height : 50,
    borderColor : '#5e5e5e',
    borderWidth : 2,
    borderRadius : 30,
    color : 'white',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 6,
    marginTop: 25
  }
})

export default Denuncia