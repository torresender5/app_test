import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import { useAppTheme } from '../../index'
import { RootStackParamList } from '../utils/types/types';

const HomeBarTop = (props: NativeStackHeaderProps) => {
  const {
    colors: { primaryContainer, primary},
  } = useAppTheme();
//   const navigation = useNavigation();
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <Appbar.Header style={{backgroundColor: primaryContainer}}>
            <Appbar.Content title={props.options.title} color={primary}/>
            {/* <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        </Appbar.Header>
    )
};

export default HomeBarTop;