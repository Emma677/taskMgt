import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import PlusIcon from '../components/PlusIcon'

const Task = () => {
  return (
    <SafeAreaView style ={styles.container}>
      <ScrollView >

        <Header title='Task'/>
        <Title type='thin'>To Do Task</Title>
      </ScrollView>

      <PlusIcon/>
    </SafeAreaView>

 
  )
}

export default Task


const styles = StyleSheet.create({
container:{
  flex:1
}
})