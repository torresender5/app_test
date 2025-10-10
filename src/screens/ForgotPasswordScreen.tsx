import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { emailValidator } from '../utils/core/utils';
import Background from '../component/Background';
import BackButton from '../component/BackButton';
import Logo from '../component/Logo';
import Header from '../component/Header';
import TextInput from '../component/TextInput';
import { theme } from '../utils/core/theme';
import Button from '../component/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
// import { Navigation } from '../types';


const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigate('LoginScreen');
  };

  return (
    <Background>
      <BackButton goBack={() => navigate('LoginScreen')} />

      {/* <Logo /> */}

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        // autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigate('LoginScreen')}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default ForgotPasswordScreen;
