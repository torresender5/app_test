import React, { memo } from 'react';
import Background from '../component/Background';
import Logo from '../component/Logo';
import Header from '../component/Header';
import Paragraph from '../component/Paragraph';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';


const Dashboard = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`);
    const data = await res.json();
    console.log(res)
    console.log(data)
    
    navigate('HomeScreen')
  }
  return (
  <Background>
    {/* <Logo /> */}
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => handleLogout()}>
      Logout
    </Button>
  </Background>
  );
};

export default Dashboard;
