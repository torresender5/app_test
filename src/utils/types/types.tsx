import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  Login: undefined;
  Signup: undefined;
  Profile: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  Dashboard: undefined;
  ForgotPasswordScreen: undefined;
  PersonalData: undefined;
  ChangePassword: undefined;

};

export type MessageNavProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};


export type Navigation = {
  navigate: (scene: string) => void;
};