import { StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';
import * as React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../utils/types/types';
import { Button } from 'react-native-paper';


const HomeScreenss = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}> 
        <Text>
             esta es la vista de home
        </Text>

        <Button
            onPress={() => navigate('Profile')}
            >
                Ir a Perfil
        </Button>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default HomeScreenss;