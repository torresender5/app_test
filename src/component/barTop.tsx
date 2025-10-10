import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import { useAppTheme } from '../../index'
import { RootStackParamList } from '../utils/types/types';
import { theme } from '../utils/core/theme';

const BarTop = (props: NativeStackHeaderProps) => {
    const {
    colors: { primaryContainer, },
  } = useAppTheme();
//   const navigation = useNavigation();
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <Appbar.Header style={{backgroundColor: primaryContainer}}>
            <Appbar.BackAction onPress={() => navigate('HomeScreen')} />
            <Appbar.Content title={props.options.title} color={theme.colors.primary}/>
            {/* <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        </Appbar.Header>
    )
};

export default BarTop;