import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useAppTheme } from '../../index'
import { theme } from '../theme/theme';

const BarTop = (props: NativeStackHeaderProps) => {
  const {
    colors: { primaryContainer, },
  } = useAppTheme();
    return (
        <Appbar.Header style={{ backgroundColor: primaryContainer}}>
            <Appbar.BackAction onPress={() => props.navigation.goBack()} />
            <Appbar.Content title={props.options.title} color={theme.colors.primary}/>
            {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
    )
};

export default BarTop;