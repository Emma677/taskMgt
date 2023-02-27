import { View, Text,  Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CheckBox = ({checked,onPress}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, checked ? {borderWidth : 2} : {}]}>
        {checked ? (<View style={styles.innerSquare}>

        </View>) : null}
    </Pressable>
  )
}

export default CheckBox

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#403572',
        borderRadius:3,
        height:16,
        width:16,
        justifyContent:'center',
        alignItems:'center'
    },
    innerSquare:{
        width:8,
        height:8,
        backgroundColor:
        // 'aqua'
        '#403572',

    }
})