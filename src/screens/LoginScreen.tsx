import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import Background from '../component/Background';
import Logo from '../component/Logo';
import Header from '../component/Header';
import Button from '../component/Button';
import TextInput from '../component/TextInput';
import BackButton from '../component/BackButton';
// import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../utils/core/utils';
// import { Navigation } from '../types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
import { showMessage } from 'react-native-flash-message';
import Loader from '../component/Loader';

// type Props = {
//   navigation: Navigation;
// };

const LoginScreen = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [showLoader, setShowLoader] = useState(false);
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    setShowLoader(true);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setShowLoader(false);
      return;
    }
    console.log('################', email.value)
    console.log('################', password.value)
    console.log('URL=', process.env.NEXT_PUBLIC_API_URL)
    console.log('URL 2=', process.env.API_URL)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.value, password: password.value }),
    });
    console.log('###############')
    const data = await res.json();
    console.log(data)
    if (res.ok) {
      showMessage({
        message: 'successful login',
        floating: true,
        type: "success"
      });
      setShowLoader(false);
      navigate('Dashboard');
    } else {
      // navigate('Dashboard');
      console.log('##### ERROR ####', data.error)
      setShowLoader(false);
      showMessage({
        message: data.error,
        floating: true,
        type: "danger"
      });
  
    }

    // navigate('Dashboard');
  };

  return (
    <>
    <Loader show={showLoader} />
    
    <Background>
      <BackButton goBack={() => navigate('HomeScreen')} />

      {/* <Logo /> */}

      <Header>Welcome back.</Header>

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

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: "",
  },
  link: {
    fontWeight: 'bold',
    color: "",
  },
});

export default LoginScreen;
