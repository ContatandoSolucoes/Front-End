import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

function Menu() {

    const navigation = useNavigation();
  return (
       <React.Fragment>
            <View style={styles.container}>
                <View style={styles.divFoto}>
                    <Image></Image>
                </View>
                <Text style={styles.name}></Text>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}><Text style={styles.options1}>Perfil</Text></TouchableOpacity>{/**Perfil */}
                <TouchableOpacity><Text style={styles.options2}>Telefones de Emergência</Text></TouchableOpacity>{/**Emergência */}
                <TouchableOpacity><Text style={styles.options3}>Problemas no aplicativo</Text></TouchableOpacity>{/**Problemas no aplicativo */}
                <TouchableOpacity><Text style={styles.options4}>Sair da conta</Text></TouchableOpacity>{/**Sair da conta */}
            </View>
       </React.Fragment>
  )
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : "center",
        alignItems : 'center',
        backgroundColor : '#659ee4',
    },
    options1:{
        backgroundColor : "#5271ff",
        fontSize : 25,
        width : 200,
        height : 50,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white',
        paddingTop : 7,
        marginTop : 15,
    },
    options2:{
        backgroundColor : "#5271ff",
        fontSize : 25,
        width : 250,
        height : 75,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white',
        paddingTop : 6,
        marginTop : 15,
    },
    options3:{
        backgroundColor : "#5271ff",
        fontSize : 25,
        width : 250,
        height : 75,
        textAlign : 'center',
        borderColor : '#5e5e5e',
        borderWidth : 2,
        borderRadius : 7,
        color : 'white',
        paddingTop : 6,
        marginTop : 15,
        marginBottom : 50,
    },
    options4:{
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
        marginTop : 190,
         marginBottom : -50
    },
    divFoto:{
        width : 150,
        height : 150,
        backgroundColor : 'white',
        borderRadius : 180
    }
})
export default Menu