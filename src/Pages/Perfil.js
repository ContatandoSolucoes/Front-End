import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button} from 'react-native';




function Perfil() {
  
  return (
    <React.Fragment>
        <View style={styles.container}>
            {/**Aqui acima eu ainda vou colocar a imagem */}
            <TouchableOpacity></TouchableOpacity>
            {/**Nos text daqui de baixo temos que substuir pelas informações fornecidas pelo usuário no cadastro logo quando o cadastro for feito*/}
            <View style={styles.form}>
                <Text style={styles.infos}>Nome</Text>{/**Nome */}
                <Text style={styles.infos}>Email</Text>{/**Email */}
                <Text style={styles.infos}>Cpf</Text>{/**Cpf */}
                <Text style={styles.infos}>Data de nascimento</Text>{/**Data de nascimento */}
                <Text style={styles.infos}>Número</Text>{/**Número de celular  */}
            </View>
            <TouchableOpacity><Text style={styles.sair}>Sair da conta</Text></TouchableOpacity>
        </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        width : "85%",
        height : "55%",
        backgroundColor : "#659ee4",
        borderRadius : 15,
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#5e5e5e'
    },
    sair:{
        backgroundColor : "#5271ff",
          fontSize : 25,
          width : 180,
          height : 40,
          textAlign : 'center',
          borderColor : '#5e5e5e',
          borderWidth : 2,
          borderRadius : 30,
          color : 'white',
          marginTop : 50,
      },
      infos:{
        backgroundColor : "#5271ff",
        fontSize : 23,
        width : 190,
        textAlign : 'center',
        marginBottom : 30,
        color : 'white',
        borderRadius: 5,
        borderColor : '#5e5e5e',
        borderWidth : 2,
    
      }

})

export default Perfil