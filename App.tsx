import React, {createContext, useContext, ReactNode, useCallback, useEffect, useState} from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';
import BarTop from './src/component/barTop';
import AppScreen, { AuthScreen} from './src/navigation/NavigateScreen';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import {AuthContext} from './src/utils/context/AuthContext';
import * as Keychain from 'react-native-keychain';

function App() {
  const [status, setStatus] = useState(false)
  const isDarkMode = useColorScheme() === 'dark';
  const authContext = useContext(AuthContext);
  const haveToken = authContext?.getAccessToken()
  console.log('app', haveToken)
  // const aaa = Keychain.getGenericPassword()
  // console.log(aaa)

  // const [status, setStatus] = useState('loading');

  const loadJWT = useCallback(async () => {
    // async function resetKeychain() {
    //   try {
    //     await Keychain.resetGenericPassword();
    //     setStatus(false)
    //     console.log("Credenciales reseteadas con éxito.");
    //   } catch (error) {
    //     console.log("Hubo un error al resetear las credenciales:", error);
    //   }
    // }
    // resetKeychain()
    try {
      const value:any = await Keychain.getGenericPassword();
      const jwt = value;
      console.log('jwt', jwt)

      authContext?.setAuthState({
        accessToken: jwt.accessToken || null,
        // refreshToken: jwt.refreshToken || null,
        authenticated: jwt.accessToken !== null,
      });
      if(jwt)
      setStatus(true);
    } catch (error) {
      setStatus(false); 
      console.log(`Keychain Error: ${error}`);
      authContext?.setAuthState({
        accessToken: null,
        // refreshToken: null,
        authenticated: false,
      });
    }
  }, []);

  useEffect(() => {
    loadJWT();
  }, [loadJWT]);
  console.log(status)

  return (
    <View style={styles.container} >
      <StatusBar barStyle={isDarkMode ? 'dark-content': 'light-content'} />
      {/* <BarTop></BarTop>  */}
      <FlashMessage />
      { status ? <AppScreen /> : <AuthScreen />}
      
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
      {/* <Text> hello esto es una prueba de la app android</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#fff',
  },
});

export default App;
