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
    <React.Fragment>
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
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
    map:{
        flex: 1,
    }

})

export default Principal