import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const OnBoarding = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <View style={{flex:1}}>
            <Image style={styles.image} source={require('../assets/avatar.jpg')}/>


        <View style={styles.footer}></View>
        </View>

        <View style={styles.content}>
            <Text style={styles.title}>Best task management app</Text>
            <Text style={styles.subtitle}>We help you manage all you task... No strees</Text>
            <Button onPress={()=>navigation.navigate('Login')} type={'aqua'}>Log in</Button>
            <Button onPress={()=>navigation.navigate('Signup')} >Create Account</Button>
        </View>

    </View>
  )
}

export default OnBoarding;    


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width: '100%',
        flex:1
    },
    content:{
        padding: 46,
        paddingTop: 0,
        backgroundColor: 'white'
    },
    title:{
        color:'black',
        fontSize:22,
        fontWeight:'bold',
        textAlign: 'center'
    },
    subtitle:{
        textAlign: 'center',
        fontSize:15,
        marginVertical:16
        // color:'#D9D9D9'
    },
    footer:{
        position: 'absolute',
        bottom: 0 ,
        height:40,
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
        
    },
})