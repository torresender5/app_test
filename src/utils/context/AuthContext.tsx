import React, {createContext, useState, ReactNode} from 'react';
import * as Keychain from 'react-native-keychain';

interface AuthState {
  accessToken: string | null;
  // refreshToken: string | null;
  authenticated: boolean;
}

interface AuthContextType {
  authState: AuthState;
  getAccessToken: () => string | null;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);
const {Provider} = AuthContext;

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [authState, setAuthState] = useState<AuthState>({
    accessToken: null,
    // refreshToken: null,
    authenticated: false,
  });

  const logout = async () => {
    await Keychain.resetGenericPassword();
    setAuthState({
      accessToken: null,
      // refreshToken: null,
      authenticated: false,
    });
  };

  const getAccessToken = () => {
    return authState.accessToken;
  };

  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
        logout,
     } }>
      {children}
    </Provider>
  );
};

export {AuthContext, AuthProvider};
