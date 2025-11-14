import React, {createContext, useContext, ReactNode} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import * as Keychain from 'react-native-keychain';




// interface AxiosContextType {
//     authAxios: AxiosInstance,
//     publicAxios: AxiosInstance,
// }
// const AxiosContext = createContext<AxiosContextType | any>({});
// const {Provider} = AxiosContext;


// const AxiosProvider = ({children}: {children: ReactNode}) => {
//     const authContext = useContext(AuthContext);

    // const authAxios = axios.create({
    //     baseURL: 'http://localhost:3000/api',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    // const publicAxios = axios.create({
    //     baseURL: 'http://localhost:3000/api',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    // authAxios.interceptors.request.use(
    //     config => {
    //         console.log('############')
    //         if (!config.headers.Authorization) {
    //             config.headers.Authorization = `Bearer ${authContext?.getAccessToken()}`;
    //         }

    //         return config;
    //     },
    //     error => {
    //         return Promise.reject(error);
    //     },
    // );

    // const refreshAuthLogic = failedRequest => {
    //     const data = {
    //     refreshToken: authContext?.authState.refreshToken,
    //     };

    //     const options = {
    //     method: 'POST',
    //     data,
    //     url: 'http://localhost:3001/api/refreshToken',
    //     };

    //     return axios(options)
    //     .then(async tokenRefreshResponse => {
    //         failedRequest.response.config.headers.Authorization =
    //         'Bearer ' + tokenRefreshResponse.data.accessToken;

    //         authContext?.setAuthState({
    //         ...authContext.authState,
    //         accessToken: tokenRefreshResponse.data.accessToken,
    //         });

    //         await Keychain.setGenericPassword(
    //         'token',
    //         JSON.stringify({
    //             accessToken: tokenRefreshResponse.data.accessToken,
    //             refreshToken: authContext?.authState.refreshToken,
    //         }),
    //         );

    //         return Promise.resolve();
    //     })
    //     .catch(e => {
    //         authContext?.setAuthState({
    //         accessToken: null,
    //         refreshToken: null,
    //         authenticated: false,
    //         });
    //     });
    // };  

    // createAuthRefreshInterceptor(authAxios, {});

    // return (
    //     <Provider
    //         value={{
    //             authAxios,
    //             publicAxios,
    //         }}
    //     >
    //         {children}
    //     </Provider>
    // );
// };

const AxiosInstance = () =>{
    // export {AxiosContext, AxiosProvider};
    const authContext = useContext(AuthContext);
    console.log('###################')
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const authAxios = axios.create({
        baseURL: `${API_URL}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // const publicAxios = axios.create({
    //     baseURL: 'http://localhost:3000/api',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    authAxios.interceptors.request.use(
        config => {
            console.log('############')
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${authContext?.getAccessToken()}`;
            }

            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );
    return authAxios;
}
export default AxiosInstance;