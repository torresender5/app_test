import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen';
import BarTop from '../component/barTop';
import ProfileScreen from '../screens/profileScreen';
import HomeBarTop from '../component/homeBarTop';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import Dashboard from '../screens/Dashboard';

const RootStack = createNativeStackNavigator({
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
    Profile: {
      screen: ProfileScreen,
      options: {
        title: 'Profile',
        header: BarTop
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
    Dashboard: {
      screen: Dashboard,
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

const Navigation = createStaticNavigation(RootStack);

export default function AppScreen() {
  return <Navigation />;
}