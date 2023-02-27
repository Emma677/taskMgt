import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import { auth } from '../firebase'



const SignUp = ({navigation}) => {
  const[agree,setAgree] = useState(false)
  const[values,setValues] = useState(false)

  const onChange = (value, key) => {
    setValues(vals =>({
      ...vals,
      [key]: value,
    }));
  };

  console.log('values', values)



const register = () =>{
  if (values.password !== values.confirm_password){
    Alert.alert('Password does match')
    return;
  }

  if(!agree){
    Alert.alert('you should agree to the terms')
  }
  auth.createUserWithEmailAndPassword(values.email, values.password)
  .then(authUser =>{
      authUser.user.updateProfile({
        displayName:values.full_name
      })
      // navigation.replace('Home')
  }).catch(error => alert(error.message))
}

  const onCheckedPress = () =>{
    setAgree(value => !value)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Title>Join the Team</Title>

      <Input onChangeText={(val) => onChange(val, 'full_name')} placeholder='Full Name'  />
      <Input onChangeText={(val) => onChange(val, 'email' )} placeholder='Email' />
      <Input onChangeText={(val) => onChange(val, 'password' )} placeholder='Password' secureTextEntry />
      <Input  onChangeText={(val) => onChange(val, 'confirm_password' )} placeholder=' Confirm Password' secureTextEntry  />


      <View style={styles.row}>
        <CheckBox checked={agree} onPress={onCheckedPress}/>

        <Text style={styles.agreeText}>Agree to our {' '}
        <Text style={styles.link}>Privacy Policy</Text> and 
         <Text style={styles.link}> Terms and Condition</Text>
      </Text>

      </View>
      
      <Button onPress={register}>Create an Account</Button>

      <Text style = {styles.footerText}>Already registered ?
        <Text onPress={()=> navigation.navigate('Login')} style = {styles.footerlink}> {' '}Login</Text>
      </Text>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:10
    // marginHorizontal:24
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
  },
  link:{
    textDecorationLine:'underline'
  },
  agreeText:{
    marginBottom:7,
    fontSize:15,
    marginLeft:8
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:16
  }

})