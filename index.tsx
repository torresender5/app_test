/**
 * @format
 */
import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  useTheme
} from 'react-native-paper';
import { name as appName } from './app.json';
import { theme } from './src/theme/theme';
import {AuthProvider} from './src/utils/context/AuthContext';
// import {AxiosProvider} from './src/utils/context/AxiosContext';

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>(theme);

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        {/* <AxiosProvider> */}
          <App />
        {/* </AxiosProvider> */}
      </AuthProvider>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
