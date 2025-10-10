import React, { memo } from 'react';
import Background from '../component/Background';
import Logo from '../component/Logo';
import Header from '../component/Header';
import Button from '../component/Button';
import Paragraph from '../component/Paragraph';
// import { Navigation } from '../utils/types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../utils/types/types';
import { View } from 'react-native';

// type Props = {
//   navigation: Navigation;
// };

const HomeScreen = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    // <View style={{backgroundColor: '#fff'}}> 
    <Background>
      {/* <Logo /> */}
      
        <Header>Login Template</Header>

        <Paragraph>
          The easiest way to start with your amazing application.
        </Paragraph>
        <Button mode="contained" onPress={() => navigate('LoginScreen')}>
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigate('RegisterScreen')}
        >
          Sign Up
        </Button>
     
    </Background>
    //  </View>
  );
};

export default HomeScreen;
