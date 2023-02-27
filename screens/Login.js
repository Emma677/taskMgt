import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import Input from '../components/Input'
import { auth } from '../firebase'


const Login = ({ navigation }) => {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  // useEffect(()=>{
  //  const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if(authUser){
  //       navigation.replace('Home')
  //     }
  //   })
  //   return unsubscribe;
  // }, [])

const signIn = () =>{
auth
.signInWithEmailAndPassword(email, password)
.then(authUser =>{
 const user = authUser;
 console.log(user.email)
  })
.catch(error => alert(error.message))
}

  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back!!</Title>

      <Input placeholder='Email' type='email' value={email} onChangeText={(text) => setEmail(text)}/>
      <Input placeholder='password'  secureTextEntry value={password} onChangeText={(text) => setPassword(text)}/>
      <Button type={'aqua'} onPress={signIn}>Login</Button>

      <Text style = {styles.footerText}>Not registered ?
        <Text onPress={()=> navigation.navigate('Signup')}  style = {styles.footerlink}> {''} Sign Up</Text>
      </Text>
      
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:24,
    
  },
  footerText: {
    color:'black',
    fontSize:15,
    textAlign:'center',
    marginTop:28
  },
  footerlink:{
    color:'#403572',
    fontWeight: 'bold',
  }
})