import React from 'react'
import useState from 'react-hook-use-state';
import { useEffect } from 'react';

import { View, StyleSheet, TextInput, TextInputComponent, Text, Image, Button, TouchableOpacity, Alert } from 'react-native'

//Imports Mapa
import MapView from 'react-native-maps'
import * as Location from 'expo-location';

function Principal() {
    const [location, setLocation] = useState(null);

     useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');// Aqui eles está apontando que se o usuário negar o uso do localizção ele apresentará essa mensagem de erro
        return;
      }

      let location = await Location.getCurrentPositionAsync({});//Aqui pega a posição atual do usuário
      setLocation(location);
    })();
  }, []);

  return (
      <View style={styles.tela}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menu}></TouchableOpacity>
          <TextInput style={styles.pesquisa}></TextInput>
        </View>

        <MapView style={styles.map}
        initialRegion={{ /**Aqui ele vai indicar onde o app irá começar eu coloquei a localizção do embu de inicio */
            latitude : -23.6491,
            longitude :  -46.8526,
            latitudeDelta : 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation  /**Aqui nessa configuração ele mostra onde o usuário está */
        loadingEnabled
        />

        <View style={styles.formDenuncia}>
          <TouchableOpacity><Text style={styles.relatar}>Relatar Problema</Text></TouchableOpacity>
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
        height : "75%",
    },
    formDenuncia:{
      width: "100%",
      height: 80,
      justifyContent: 'center',
      backgroundColor: '#57bee7',
      alignItems : 'center',
      marginBottom: -60,
    },
    relatar:{
      backgroundColor : "#13827c",
        fontSize : 25,
        width : 250,
        height : 50,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white'
    }

})

export default Principal