import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableWithoutFeedback, Modal} from 'react-native';
import { useTheme, Card, Text, TextInput, Menu, MD2Colors, Button, PaperProvider, Portal, BottomNavigation } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { theme } from '../../theme/theme';
import Icon from '@react-native-vector-icons/material-design-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types/types';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  visible: boolean
  onDismiss: any
  handleShowModalCode: any
  showModalCode: any
}
const MyModal = ({visible, onDismiss, handleShowModalCode, showModalCode}: Props) => {
  return (
    <>
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onDismiss}
    >
      {/* Este TouchableWithoutFeedback cubre toda la pantalla para cerrar el modal */}
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View style={styles.modalOverlay}>
          {/* Este TouchableWithoutFeedback evita que se cierre el modal al hacer clic en su contenido */}
          <View style={styles.profileModalContainer}>
                <View style={styles.contentIcon}>
                    <Image source={require('../../assets/flash.png')} />
                </View>
            </View>
          <TouchableWithoutFeedback>
            
            {/* Este View es el contenido del modal, que ocupa la mitad inferior */}
            <View style={styles.modalContent}>
                <View style={{marginTop:40, alignItems: 'center'}}>
                    <Text variant="titleMedium" style={{ justifyContent: 'center'}}>
                            Change passworg
                    </Text>
                </View>
                <View style={{height: '20%', justifyContent: 'center' }}>
                    <Text>
                        Are you sure you want to change password ?
                    </Text>

                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: '100%' }}>
                    <View style={{ paddingBottom: 20}}>
                        <Button mode="contained" onPress={handleShowModalCode} >
                            Changue Password
                        </Button>
                    </View>
                    <View style={{ paddingBottom: 20}}>
                        <Button mode="contained" onPress={onDismiss} >
                            Cancel
                        </Button>
                    </View>
                </View>      
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
    </>
  )
}

interface mConfirmationProps {
  visible: boolean
  onDismiss: any
}

const MyModalConfirmation = ({visible, onDismiss}: mConfirmationProps) => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <>
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade" // O puedes usar "none" o "fade"
            onRequestClose={onDismiss}
        >
            {/* Este TouchableWithoutFeedback cubre toda la pantalla para cerrar el modal */}
            <TouchableWithoutFeedback onPress={onDismiss}>
                <View style={styles.modalOverlay}>
                {/* Este TouchableWithoutFeedback evita que se cierre el modal al hacer clic en su contenido */}
                <View style={styles.profileModalContainer}>
                        <Image source={require('../../assets/profile.png')} style={styles.image} />
                    </View>
                <TouchableWithoutFeedback>
                    
                    {/* Este View es el contenido del modal, que ocupa la mitad inferior */}
                    <View style={styles.modalContent}>
                        <View style={{marginTop:40, alignItems: 'center'}}>
                            <Text variant="titleMedium" style={{ justifyContent: 'center'}}>
                                    Upload Photo Successfuly
                            </Text>
                        </View>
                        <View style={{height: '20%', justifyContent: 'center' }}>
                            <Text>
                                Los datos fueron actualizados correctamente 
                            </Text>

                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: '100%' }}>
                            <View style={{ paddingBottom: 20}}>
                                <Button mode="contained" onPress={() => navigate('Profile')} >
                                    continuar
                                </Button>
                            </View>
                            {/* <View style={{ paddingBottom: 20}}>
                                <Button mode="contained" onPress={onDismiss} >
                                    Cancel
                                </Button>
                            </View> */}
                        </View>      
                    </View>
                </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}

interface modalConfirmCodeProps {
  visible: boolean
  onDismiss: any
  email: string
  handleModalEnd: any
}

// export const Code = yup.object({
//     code1: yup.string().min(1, 'Name must be at least 1 characters').max(1, 'Name must be at least 1 characters' ).required('Is required'),
//     code2: yup.string().min(1, 'Name must be at least 1 characters').max(1, 'Name must be at least 1 characters' ).required('Is required'),
//     code3: yup.string().min(1, 'Name must be at least 1 characters').max(1, 'Name must be at least 1 characters' ).required('Is required'),
//     code4: yup.string().min(1, 'Name must be at least 1 characters').max(1, 'Name must be at least 1 characters' ).required('Is required'),
//     code5: yup.string().min(1, 'Name must be at least 1 characters').max(1, 'Name must be at least 1 characters' ).required('Is required'),
//     code6: yup.string().min(1, 'Name must be at least 1 characters').max(1, 'Name must be at least 1 characters' ).required('Is required'),
    
// });

const ModalConfirmCode = ({visible, onDismiss, email, handleModalEnd }: modalConfirmCodeProps) => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [numeros, setNumeros] = React.useState(['', '', '', '', '', '']);

    // const {
    //     control,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(Code),
    // });

    const handleNumeroChange = (index: any, value: any) => {
        const newNumeros = [...numeros];
        newNumeros[index] = value;
        setNumeros(newNumeros);
    };

    return (
        <>
            <Modal
                visible={visible}
                transparent={true}
                animationType="fade" // O puedes usar "none" o "fade"
                onRequestClose={onDismiss}
            >
                {/* Este TouchableWithoutFeedback cubre toda la pantalla para cerrar el modal */}
                <TouchableWithoutFeedback onPress={onDismiss}>
                    <View style={styles.modalOverlay}>
                        {/* Este TouchableWithoutFeedback evita que se cierre el modal al hacer clic en su contenido */}
                        <View style={styles.profileModalContainer}>
                            <View style={styles.contentIcon}>
                                <Image source={require('../../assets/flash.png')} style={styles.image} />
                            </View>
                        </View>
                        <TouchableWithoutFeedback>
                            {/* Este View es el contenido del modal, que ocupa la mitad inferior */}
                            <View style={styles.modalCodeContent}>
                                <View style={{marginTop:40, alignItems: 'center'}}>
                                    <Text variant="titleMedium" style={{ justifyContent: 'center'}}>
                                            Forgot Password
                                    </Text>
                                </View>
                                <View style={{height: '20%', justifyContent: 'center' }}>
                                    <Text>
                                        A reset code has been send to {email}, check your email to continue the passwor reset process.
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom:10}}>
                                    {numeros.map((numero, index) => (
                                        <TextInput
                                            mode='outlined'
                                            key={index}
                                            value={numero}
                                            onChangeText={(value) => handleNumeroChange(index, value)}
                                            keyboardType="numeric"
                                            maxLength={1} // Para asegurar que solo entre un número por input
                                            style={{ width: 40, }}
                                        />
                                    ))}
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: '100%' }}>
                                    <View style={{ paddingBottom: 20}}>
                                        <Button mode="contained" onPress={handleModalEnd} >
                                            continuar
                                        </Button>
                                    </View>
                                    
                                    <View style={{ paddingBottom: 20}}>
                                        <Button mode="contained" onPress={onDismiss} >
                                            Cancel
                                        </Button>
                                    </View>
                                </View>      
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}

export const cahnguePassword = yup.object({
    currentPassword: yup.string().min(3, 'Name must be at least 3 characters').required('Current Password is required'),
    newPassword: yup.string().min(3, 'Last Name must be at least 3 characters').required('New Password is required'),
    confirmPassword: yup.string().min(3, 'Last Name must be at least 3 characters').required('Cinfirm Password is required'),
});

const ChangePasswordScreen = () => {
    const [visible, setVisible] = useState(false);
    const [showMConfirmation, setShowMConfirmation] = useState(false);
    const [showModalCode, setShowModalCode] = useState(false);
    const [isNuewPasswordSecure, setIsNewPasswordSecure] = useState(true);
    const [isCurrentPasswordSecure, setIsCurrentPasswordSecure] = useState(true);
    const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(cahnguePassword),
    });

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const handleshowModalCode = () => setShowModalCode(true);
    const hideModalCode = () => setShowModalCode(false);
    const handleModalEnd = () => setShowMConfirmation(true);
    

    const onError = (data: any) => {
        console.log('#######', data)
        // if (!data){
            showModal();
        // }
        
    }

    const onSubmit = (data: any) => {
        console.log('Login Data:', data);
 
        console.log('aaaaaaa', data)
        hideModal()
        console.log(' Despues de hide modal')
        setShowMConfirmation(!showMConfirmation)
        console.log(' Despues de confirm modal  modal')
    };

    return (
        <>
            <ScrollView style={{ height: '75%'}}> 
                <View style={styles.container}>
                    <Card style={styles.cardContainer}>
                        <View >
                            <Text variant="headlineSmall" style={styles.textTitle}>
                            Change Password
                            </Text>
                        </View> 
                        <Text variant="titleMedium" style={{marginTop:10, marginLeft: 10, marginRight: 10}}>
                            Fill information to change password
                        </Text>
                        <View style={{margin:10}}>
                            <Controller
                                control={control}
                                name="currentPassword"
                                render={({ field: { onChange, value } }) => (
                                    
                                    <TextInput
                                        mode='outlined'
                                        label="Current Password"
                                        value={value}
                                        onChangeText={onChange}
                                        secureTextEntry={isCurrentPasswordSecure}
                                        right={<TextInput.Icon 
                                            color={MD2Colors.black} 
                                            size={28}
                                            icon={isCurrentPasswordSecure ? "eye":"eye-off"}// where <Icon /> is any component from vector-icons or anything else
                                            onPress={() => { isCurrentPasswordSecure ? setIsCurrentPasswordSecure(false) : setIsCurrentPasswordSecure(true) }}
                                        />}
                                    />
                                )} 
                            />
                            {errors.currentPassword && <Text style={{ color: 'red' }}>{errors.currentPassword.message}</Text>}
                        </View>
                        <View style={{margin:10}}>
                            <Controller
                                control={control}
                                name="newPassword"
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        mode='outlined'
                                        label="New Password"
                                        value={value}
                                        onChangeText={onChange}
                                        secureTextEntry={isNuewPasswordSecure}
                                        right={<TextInput.Icon 
                                            
                                            color={MD2Colors.black} 
                                            size={28}
                                            icon={isNuewPasswordSecure ? "eye":"eye-off"}// where <Icon /> is any component from vector-icons or anything else
                                            onPress={() => { isNuewPasswordSecure ? setIsNewPasswordSecure(false) : setIsNewPasswordSecure(true) }}
                                        />}
                                    />
                                )} 
                            />
                            {errors.newPassword && <Text style={{ color: 'red' }}>{errors.newPassword.message}</Text>}
                        </View>
                        <View style={{margin:10}}>
                            <Controller
                                control={control}
                                name="confirmPassword"
                                render={({ field: { onChange, value } }) => (
                                    <TextInput
                                        mode='outlined'
                                        label="Confirm Password"
                                        value={value}
                                        onChangeText={onChange}
                                        secureTextEntry={isConfirmPasswordSecure}
                                        right={<TextInput.Icon
                                            color={MD2Colors.black} 
                                            size={28}
                                            icon={isConfirmPasswordSecure ? "eye":"eye-off"}// where <Icon /> is any component from vector-icons or anything else
                                            onPress={() => { isConfirmPasswordSecure ? setIsConfirmPasswordSecure(false) : setIsConfirmPasswordSecure(true) }}
                                        />}
                                    />
                                )} 
                            />
                            {errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword.message}</Text>}
                        </View>
                    </Card>
                </View>
            </ScrollView>
            <View style={styles.conytainerBottom}>
                <Button mode="contained" onPress={handleSubmit(onError)} >
                    Update
                </Button>
            </View>
            <MyModal visible={visible} onDismiss={hideModal} handleShowModalCode={handleshowModalCode} showModalCode={showModalCode} />
            <ModalConfirmCode visible={showModalCode} onDismiss={hideModalCode} email='torresender5@gmail.com' handleModalEnd={handleModalEnd}/>
            <MyModalConfirmation visible={showMConfirmation} onDismiss={setShowMConfirmation}/>
        </>
    )

}

const styles = StyleSheet.create({ 
  container: {
    height: '100%',
    padding: 20
  },
  profileContainer: {
    flex: 0, // O el valor que necesites para que el contenedor ocupe espacio
    justifyContent: 'center', // Centra verticalmente los elementos hijos
    alignItems: 'center',     // Centra horizontalmente los elementos hijos
    
  },
  cardContainer: {
    paddingBottom:20,
    marginBottom:20
  },
  image:{
    width:100,
    height: 100
  },
  textTitle:{
    paddingLeft:10,
    paddingTop:10,
    textAlign: 'left',
    
  },
  colorIcon: {
    color: '#795FFC'
  },
  multilineInput: {
    minHeight: 100, // Example: Set a minimum height for the textarea
  },
  conytainerBottom: {
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: MD2Colors.white
  },
  containerModalConfirmation: {
    zIndex: 10,
    height: '100%',
    backgroundColor: MD2Colors.transparent
  },
  modalOverlay: {
    flex: 2, // Ocupa toda la pantalla
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo opaco transparente
    justifyContent: 'flex-end', // Alinea el contenido a la parte inferior
  },
  modalContent: {
    height: '35%', // Ocupa la mitad de la altura de la pantalla
    backgroundColor: MD2Colors.white,
    borderTopLeftRadius: 20, // Añadir bordes redondeados para una mejor estética
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalCodeContent: {
    height: '40%', // Ocupa la mitad de la altura de la pantalla
    backgroundColor: MD2Colors.white,
    borderTopLeftRadius: 20, // Añadir bordes redondeados para una mejor estética
    borderTopRightRadius: 20,
    padding: 20,
  },
  profileModalContainer: {
    zIndex:100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contentIcon: {
    width: 100,
    height: 100,
    backgroundColor: '#795FFC',
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center',
    bottom: -40
  }
});

export default ChangePasswordScreen;
