import React,{useState,useEffect} from 'react'
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity,ImageBackground, Button,Alert} from 'react-native'
import api from '../api.js'
import back from "../../assets/Fundo.png"
import * as Location from 'expo-location'
import {FontAwesome} from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';

function Denuncia() {
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState();
    const [location , setLocation] = useState({});
    const [address, setAddress] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [problema, setProblema] = useState(['Elétrico(fio desencapado, poste caido)', 'Hidraúlico(vazão de água, cano exposto)', 'Infra(semaforo quebrado, calçada quebrada)']);
    const [tipo_problema, setTipo_problema] = useState();
    const [desc_problema,setDesc_Problema] = useState();

    try{
        useEffect(()=>{
          const getPermission = async()=>{
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
              console.log('Please grant location permission');
              return;
            }
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
            console.log('location');
            console.log(currentLocation);
          };
          getPermission();
        },[location]);
      }catch(err){
        Alert.alert(`erro ${err}`)
      }

      useEffect(()=>{
        console.log('latitude: ',latitude);
        console.log('longitude: ',longitude);
      },[latitude,longitude])

      const geocode = async()=>{
        try{
            if(address === ""){
                       setLatitude(location.coords.latitude);
                       setLongitude(location.coords.longitude);
                       console.log('>>>>>>>>>>>>>>>>>> location atual >>>>>>>>>>>>>>>>>>>>')
                   console.log("     ");
                  }else{
                       const geocodedLocation = await Location.geocodeAsync(address);
                       console.log('>>>>>>>>>>>>', address)
                       console.log('>>>>>>>>>>>>>>>>>> location >>>>>>>>>>>>>>>>>>>>');
                       setLatitude(geocodedLocation[0].latitude);
                       setLongitude(geocodedLocation[0].longitude);
                       console.log("     ");
                 }
                }catch(err){
                  Alert.alert(`error 404: ${err}`)
                }
              }

    const obterPermissao = async () => {

        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted){
            Alert.alert('Voce precisa dar permissao')
        }    
    }
    const obterImage = async() => {
        const result = await ImagePicker.launchCameraAsync()
        if(!result.canceled){
            setImageUri(result.assets[0].uri)
        }
        await geocode()
    }
    const galeriaImage = async() => {
        const result = await ImagePicker.launchImageLibraryAsync()
        
        if(!result.canceled){
            setImageUri(result.assets[0].uri)
        }
        await geocode()
    }
    const envData = async() =>{

        //navigation.navigate("Principal")
        geocode()

        try{
            const data ={
                imageUri,tipo_problema,longitude,latitude,desc_problema
            };

            if(data.tipo_problema === ''){
                alert('Selecione um tipo de problema')
            } else{
                const response = await api.post('/denuncia', data)
                console.log(response)
                setImageUri('');
                setAddress('');
                setTipo_problema('');
                setDesc_Problema('');
            }
        }catch(error){
            Alert.alert(`${error}`)
            console.log(`>>> ${error}`)
        }

        setImageUri('')
    }

    React.useEffect(() => {
        obterPermissao()
    }, [])


    return (
        <React.Fragment>

            <ImageBackground source={back} resizeMode="cover" style={styles.image}>
            <Text style={styles.title}>Relatar Problema</Text>
            <View style={styles.container}>

                <TextInput 
                    value={address} 
                    onChangeText={setAddress}
                    style={styles.input}
                    placeholder="Endereço"
                ></TextInput>

                <Picker
                    selectedValue={tipo_problema}
                    style={styles.select}
                    onValueChange={(itemValue) => 
                    setTipo_problema(itemValue)
                    }>
                    <Picker.Item label={'Tipo de problema'} value={"Nulo"} />
                    {
                        problema.map(cr => {
                            return <Picker.Item label={cr} value={cr} />
                        })
                    }
                    
                </Picker>

                <View style={styles.imagem}>
                {imageUri && <Image source={{uri: imageUri}} style={styles.img}/> }
                </View>

                {/* ()=>{navigation.navigate("Camera")} */}
                <View style={styles.button}>
                <TouchableOpacity onPress={obterImage} style={styles.alinhamento}>
                <FontAwesome name='camera' size={60} color="#5271ff"></FontAwesome>
                </TouchableOpacity> 
                <TouchableOpacity onPress={galeriaImage} style={styles.alinhamento}>
                <FontAwesome name='image' size={60} color="#5271ff"></FontAwesome>
                </TouchableOpacity>
                </View>

                <TextInput 
                    value={desc_problema} 
                    onChangeText={setDesc_Problema}
                    style={styles.inputDesc}
                    placeholder="Descrição"
                    multiline={true}
                ></TextInput>

                <TouchableOpacity
                    onPress={envData}><Text style={styles.relatar}>Enviar Relato</Text></TouchableOpacity>

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
        paddingTop: "20%"
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
    imagem:{
        width: 202,
        height: 102,
        borderRadius:2,
        borderWidth : 0.1,
        marginBottom: '10%'
    },
    img:{
        width: 200,
        height: 100,
        borderRadius:2,
        borderWidth : 1
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
    },
    container2: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    button: {
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 10,
    },
    alinhamento:{
        marginLeft:10,
        marginRight:10
    },
    select:{
        width: "80%",
    }
})

export default {Denuncia}
