import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BarTop from '../component/barTop';
import ProfileScreen from '../screens/profileScreen';
import HomeBarTop from '../component/homeBarTop';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import Dashboard from '../screens/Dashboard';
import PersonalDataScreen from '../screens/personalDataScreen';
import ChangePasswordScreen from '../screens/changePassword/ChangePasswordScreen';


const Root = createNativeStackNavigator({
  screens: {
    HomeScreen: {
      screen: HomeScreen,
      options: {
        headerShown:false,
        headerBackVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        }
      },
    },
    LoginScreen:{
      screen: LoginScreen,
      options: {
        headerShown:false,
        headerBackVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        }
      },

    },
    RegisterScreen:{
      screen: RegisterScreen,
      options: {
        headerShown:false,
        headerBackVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        }
      },
    },
    ForgotPasswordScreen: {
      screen: ForgotPasswordScreen,
      options: {
        headerShown:false,
        headerBackVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        }
      },
    },
    
  },
});


const RootStack = createNativeStackNavigator({
  screens: {
    Profile: {
      screen: ProfileScreen,
      options: {
        title: 'Profile',
        header: BarTop,

      },
    },
    PersonalData: {
      screen: PersonalDataScreen,
      options: {
        title: 'Personal Data',
        header: BarTop,
      },
      navigationKey: 'Profile'

    },
    ChangePassword: {
      screen: ChangePasswordScreen,
      options: {
        title: 'Changue Password',
        header: BarTop,
      },
      navigationKey: 'Profile'

    },
    Dashboard: {
      screen: Dashboard,
      options: {
        // headerShown:false,
        headerBackVisible: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
        // title: 'Profile',
        header: BarTop
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function AppScreen() {
  return <Navigation />;
}
const AuthAppScreen = createStaticNavigation(Root);

export function AuthScreen() {
  return <AuthAppScreen />;
}