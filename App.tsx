import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';
import BarTop from './src/component/barTop';
import AppScreen from './src/layout/NavigateScreen';
import FlashMessage, { showMessage } from 'react-native-flash-message';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container} >
      <StatusBar barStyle={isDarkMode ? 'dark-content': 'light-content'} />
      {/* <BarTop></BarTop>  */}
      <FlashMessage />
      <AppScreen />
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
