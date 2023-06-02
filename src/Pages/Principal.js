import React from 'react'
import useState from 'react-hook-use-state';
import { useEffect } from 'react'

import menu from "../../assets/menu.png"

import { View, StyleSheet, TextInput, TextInputComponent, Text, Image, Button, TouchableOpacity, Alert } from 'react-native'

import api from '../api'

//Imports Mapa
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

//Pesquisa de localização
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function Principal() {


    const [location, setLocation] = useState(null);
    const [Denuncia, setDenuncia] = useState([])

     useEffect(() => {

      async function getD() {
        const {data} = await api.get('/getD')
        setDenuncia(data)
      }
      

    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');// Aqui ele está apontando que se o usuário negar o uso do localizção ele apresentará essa mensagem de erro
        return;
      }

      let location = await Location.getCurrentPositionAsync({});//Aqui pega a posição atual do usuário
      setLocation(location);
    })();
    getD()
  }, [Denuncia]);
  

  const navigation = useNavigation();
  // Barra de pesquisa
  const [origin, setOrigin] = useState(null)
  const [Destination, setDestination] = useState(null)
  
  return (

      <View style={styles.tela}>
        <View style={styles.header}>
  
         
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image source={menu} style={styles.menu}></Image>
          </TouchableOpacity>{/**Botão que irá abrir o menu */}
          {/* <TextInput style={styles.pesquisa} placeholder="Pesquise alguma localização"></TextInput>*Barra de pesquisa de localização */}
        </View>

        <MapView 
        style={styles.map}
        initialRegion={{ /**Aqui ele vai indicar onde o app irá começar eu coloquei a localizção do embu de inicio */
            latitude : -23.6491,
            longitude :  -46.8526,
            latitudeDelta : 0.0922,
            longitudeDelta: 0.0421,    
        }}
        showsUserLocation  /**Aqui nessa configuração ele mostra onde o usuário está */
        loadingEnabled
        >

        {Denuncia.length > 0 && (
         Denuncia.map((m) => {
           return (
             <Marker 
             coordinate = {m} 
             key={m.id_denuncia}
             pinColor="blue" />
           )
          }) 
          )}

        </MapView>

        <View style={styles.formDenuncia}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Denuncia")}}><Text style={styles.relatar}>Relatar Problema</Text></TouchableOpacity>{/**Aqui é botão de fazer denuncia */}
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    tela:{
      justifyContent: 'center',
      alignItems: 'center',
      flex : 1,
    },
    map:{
        width : "100%",
        height : "77%",
    },
    formDenuncia:{
      width: "100%",
      height: "10%",
      justifyContent: 'center',
      backgroundColor: '#659ee4',
      alignItems : 'center',
    },
    relatar:{
      backgroundColor : "#5271ff",
        fontSize : 25,
        width : 250,
        height : 50,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white',
        paddingTop : 7,
    },
    header:{
      width: "100%",
      height: '13%',
      // justifyContent: 'center',
      backgroundColor: '#659ee4',
      alignItems : 'center',
      flexDirection : "row",
      paddingLeft : 6,
    },
    pesquisa:{
      width : "70%",
      height : 33,
      backgroundColor : "white",
      marginTop : 40,
      borderRadius : 8,
      paddingLeft : 10
    },
    menu : {
      width : 55,
      height : 47,
      marginTop : 36,
      marginLeft : 345
    }

})

export default Principal