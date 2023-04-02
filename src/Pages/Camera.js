import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity ,Text,Image} from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';

function CameraApk() {
    const camRef = useRef(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturePhoto, setCapturePhoto] = useState(null);
  
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
            const data = await camRef.current.takePictureAsync();
            setCapturePhoto(data.uri)
            //console.log(data)
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
});

export default CameraApk;