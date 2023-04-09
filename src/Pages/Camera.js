import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity ,Text,Image, Modal, Alert} from 'react-native';
import { Camera } from 'expo-camera';
import api from '../api.js'
import {FontAwesome} from '@expo/vector-icons';

function CameraApk() {
    const camRef = useRef(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [openPhoto , setOpenPhoto] = useState(false);
  
    useEffect(()=>{
        (async()=>{
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[]);

    if(hasPermission === null){
        return <View/>
    }
    if(hasPermission === false){
        return <Text>No access to Camera</Text>
    }

    async function takePicture(){
        if(camRef){
          try{
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri)
            setOpenPhoto(true)
            const img ={
              capturedPhoto
            }
            const response = await api.post('/photo', img)
            console.log(response)
          } 
          catch(error){
            Alert.alert(`${error}`)
            console.log(`>>> ${error}`)
          }
           
        }
    }

  return (
    <View style={styles.container}>
        <Camera style={styles.camera}
        type={type}
        ref={camRef}
        >
            <View style={styles.contentButton}>
                <TouchableOpacity style={styles.buttonCam} onPress={takePicture}>
                    <FontAwesome name='camera' size={60} color="blue"></FontAwesome>
                </TouchableOpacity>
            </View>
        </Camera>

        {capturedPhoto &&(
          <Modal 
           animationType="slide"
           transparent={true}
           visible={openPhoto}
          >
            <View style={styles.contentModal}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={()=>{setOpenPhoto(false)}}
              >
                <FontAwesome name='close' size={60} color="blue"></FontAwesome>
              </TouchableOpacity>
                  <Image style={styles.imgPhoto} source={{uri : capturedPhoto}}/>
            </View>
          </Modal>
        )}
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex:1,
    width:'100%',
    height:'100%',
  },
  contentButton:{
    flex:1,
    justifyContent:'center',
    backgroundColor:"white",
    flexDirection:"row",
    marginTop:700,
    borderRadius:9
  },
  buttonCam:{
    position:"absolute",
    bottom:50,
    alignItems:"center",
  },
  contentModal:{
    flex:1,
    justifyContent:'center',
    alignItems:"flex-end",
    margin:20,
  },
  closeButton:{
    position:"absolute",
    top:10,
    left:2,
    margin:10,
  },
  imgPhoto:{
    width:"100%",
    height:400,
    borderRadius:9,
  }
});

export default CameraApk;
