import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';



export default function App() {

  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background: '#fff'
    },
  };

  return (
    <NavigationContainer theme={theme} >
       <Routes/>
  </NavigationContainer>
  );
}





