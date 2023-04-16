import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, ImageBackground} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import useState from 'react-hook-use-state';
import * as ImagePicker from 'expo-image-picker';
import back from "../../assets/Fundo.png"
import AsyncStorage from '@react-native-async-storage/async-storage';

function Perfil() {
  const [image, setImage] = useState(null);

  

  //AINDA ESTOU ESTUDANDO O QUE FAZ ISSO PQ ATÉ AGORA NÃO ENTENDI
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  
  return (
    <React.Fragment>
      <View style={styles.container}>
          <ImageBackground source={back} resizeMode="cover" style={styles.image}>
            <TouchableOpacity onPress={pickImage}>
              <View style={styles.divFoto}>
                <Image source={image}></Image>
              </View>
            </TouchableOpacity>
              
              {/**Nos text daqui de baixo temos que substuir pelas informações fornecidas pelo usuário no cadastro logo quando o cadastro for feito*/}
              <View style={styles.form}>
                  <Text style={styles.infos}>{AsyncStorage.getItem("nome_usuario")}</Text>{/**Nome */}
                  <Text style={styles.infos}>{AsyncStorage.getItem("email")}</Text>{/**Email */}
                  <Text style={styles.infos}>{AsyncStorage.getItem("nascimento")}</Text>{/**Data de nascimento */}
                  <Text style={styles.infos}>{AsyncStorage.getItem("telefone")}</Text>{/**Número de celular  */}
              </View>
              <TouchableOpacity><Text style={styles.sair}>Sair da conta</Text></TouchableOpacity>
            </ImageBackground>
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
    
      },
      divFoto:{
        width : 150,
        height : 150,
        backgroundColor : '#5271ff',
        borderRadius : 180,
        marginBottom: 25,
        alignItems : "center",
        justifyContent : "center",
        borderColor : '#5e5e5e',
        borderWidth : 2,
    },
    image :{
      flex : 1,
      justifyContent : 'center',
      width : "100%",
      alignItems : 'center',
    }

})

export default Perfil