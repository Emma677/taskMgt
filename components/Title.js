import {Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({children,type}) => {
  return (
      <Text style={[styles.title, type === 'thin' ? styles.thin : {}]}>{children}</Text>

  )
}

export default Title


const styles = StyleSheet.create({
    title:{
        color:'black',
        fontSize:24, 
        fontWeight:'bold',
        paddingVertical:24
    },
    thin:{
    fontWeight:'300',
    color:'green',
    paddingHorizontal:24
    }
})