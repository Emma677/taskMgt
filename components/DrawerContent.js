import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet, Text } from "react-native";
import { auth } from "../firebase";

function DrawerContent(props) {
   const  {navigation} = props
    const logout = () =>{
        auth
        .signOut()
        .then(() => console.log('user is off'))
    }; 

    return(
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props}/> */}

            <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Home</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('Task')}>Task</Text>
            <Text style={styles.link} onPress={logout}>Log out</Text>
        </DrawerContentScrollView>
    )
}

export default DrawerContent;


const styles = StyleSheet.create({
    link:{
        color:'black',
        fontWeight: '500',
        fontSize: 13,
        margin:8,
        marginHorizontal:16
    }
})