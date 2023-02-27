import { TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({...props}) => {
  return (
   <TextInput placeholderTextColor={'#707070'} style={styles.input} {...props}/>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#E7E7E7',
        paddingHorizontal: 24,
        paddingVertical: 13,
        borderRadius:10,
        color: 'Black',
        marginVertical:12,
        fontSize:15
        // lightGray, Gray => 8B97A8, midgray = #707070
    }
})