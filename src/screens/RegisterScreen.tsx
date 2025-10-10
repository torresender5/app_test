import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../component/Background';
import Logo from '../component/Logo';
import Header from '../component/Header';
import Button from '../component/Button';
import TextInput from '../component/TextInput';
import BackButton from '../component/BackButton';
// import { theme } from '../core/theme';
// import { Navigation } from '../types';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../utils/core/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
import { theme } from '../utils/core/theme';
import { showMessage } from 'react-native-flash-message';

// type Props = {
//   navigation: Navigation;
// };

const RegisterScreen = () => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const _onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name.value, email: email.value, password: password.value }),
    });
    const data = await res.json()
    if (res.ok) {
      showMessage({
        message: 'successful register',
        floating: true,
        type: "success"
      });
      navigate('LoginScreen');
    } else{
      console.log('error')
      showMessage({
        message: data.error,
        floating: true,
        type: "danger"
      });
    }

    // navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton goBack={() => navigate('HomeScreen')} />

      {/* <Logo /> */}

      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        // autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default RegisterScreen;
