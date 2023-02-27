import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,Text, Image, StyleSheet, Pressable } from 'react-native'

const Header = ({title}) => {

    const navigation= useNavigation()

    const openDrawer= () =>{
        navigation.openDrawer()
    }
    return(
    <View style={styles.container}>
        <Pressable onPress={openDrawer} hitSlop={8}>

        <Image style ={styles.icon} source={require('../assets/menu.jpg')}/>
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <View style ={styles.icon}/>
    </View>
    )
}

export default Header
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:24
    },
    icon:{
        width:24,
        height:24,
        
    },
    title:{
        fontSize:26,
        color:'#000',
        fontWeight: 'bold'
    }
})