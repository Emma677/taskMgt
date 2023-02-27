import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import PlusIcon from '../components/PlusIcon'
import Title from '../components/Title'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Home'/>

      <ScrollView>

        <Title type='thin'>Daily Task</Title>
      </ScrollView>

      <PlusIcon/>
    </SafeAreaView>
  )
}

export default Home


const styles = StyleSheet.create({
  container:{
    flex:1
  }
})