import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { SafeAreaView, Text } from 'react-native';
import OnBoarding from './screens/OnBoarding';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import { useEffect, useState } from 'react';
import 'firebase/auth'
import { auth } from './firebase';
import AddTask from './screens/AddTask';
import Task from './screens/Task';
import { Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import DrawerContent from './components/DrawerContent';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes =() => {

const [initializing, setInitializing] = useState(true)
const [user, setUser]= useState();

console.log(user);

function onAuthStateChanged(user){
    setUser(user)
    if(initializing){
        setInitializing(false)
    }
}

useEffect(() =>{
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber
},[]);
if(initializing){
    return null
}


const Tabs = () =>(
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown:false}}>

        <Tab.Screen name='Home' component={Home} options={{tabBarIcon: ( ) =>(
            <Image style={{height:22,
                width:24,
                tintColor:   'gray'
            }} source={ 
                require('./assets/Home.png') }/>
)}
}
/>
        <Tab.Screen name='Task' component={Task} options={{tabBarIcon: () =>(
            <Image style={{height:24,
                width:24,
                // tintColor: 'black' 
            }}
                 source={
             require('./assets/CalenderIn.jpg')}/>
)}}/>
    </Tab.Navigator>

);

if(user){
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props) => <DrawerContent {...props}/>}>
            <Drawer.Screen name='Tabs' component={Tabs} />
            <Drawer.Screen name='AddTask' component={AddTask}/>

        </Drawer.Navigator>
    )
 }



  return (
    
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}>
       <Stack.Screen name='OnBoarding' component={OnBoarding} options={{headerShown: false}}/>  
        <Stack.Screen name='Login' component={Login} options={{headerLeft: null, gestureEnabled: false}}/>
        <Stack.Screen name='Signup' component={SignUp} options={{headerLeft: null, gestureEnabled: false}}/>
    </Stack.Navigator>

  );
}


export default Routes


const styles = StyleSheet.create({
    icon:{
        height:24,
        width:24
    }
})