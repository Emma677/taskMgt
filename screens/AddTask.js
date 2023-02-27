import { View, Text, StyleSheet, SafeAreaView, Pressable, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'

const AddTask = ({navigation}) => {
const handleBack = () =>{
  navigation.goBack()
}

  return (
    <SafeAreaView style = {styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
        <Image style = {styles.image} source={require('../assets/left.png')}/>
      </Pressable>

      <Title type='thin'>Add New Task</Title>
    </SafeAreaView>
  )
}

export default AddTask

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image:{
    width:32,
    height:32
  },
  backContainer:{
    padding:24
  }
})