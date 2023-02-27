import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'



const Button = ({onPress,type, children}) => {
  return (
   <TouchableOpacity onPress={onPress} style={[styles.btn, type === 'aqua' ? styles.aquaBg : {}]}>
    <Text style={styles.text}>{children}</Text>
   </TouchableOpacity>
  )
}

export default Button


const styles = StyleSheet.create({
btn:{
backgroundColor: '#403572',
flexDirection:'row',
width:'80%',
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
borderRadius:10,
padding:13,
marginVertical:10
},
text:{
    color:'white',
    fontSize:16,
    fontWeight: 'bold'
},
aquaBg:{
    backgroundColor:'aqua'
}
})