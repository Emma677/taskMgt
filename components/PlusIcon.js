import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text,  StyleSheet, Pressable, } from 'react-native'

const PlusIcon = () => {
    const navigation= useNavigation()

    const onPress = () =>{
        navigation.navigate('AddTask')
    }
    return(
        <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
            <Text style={styles.plus}>+</Text>
        </Pressable>
    )
}

export default PlusIcon



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:60,
        borderRadius: 100,
        backgroundColor:'green',
        position:'absolute',
        bottom:24,
        right:24
        
    },
    plus:{
        fontSize: 32,
        marginTop:-2,
        color:'white',
        fontWeight:'600'
    }
})