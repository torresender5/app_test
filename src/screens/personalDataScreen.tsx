import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Image, TouchableWithoutFeedback, Modal} from 'react-native';
import { useTheme, Card, Text,TextInput, Menu, MD2Colors, Button, PaperProvider, Portal } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { theme } from '../theme/theme';
import Icon from '@react-native-vector-icons/material-design-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

// interface onDismiss = () => ()
interface Props {
  visible: boolean
  onDismiss: any
  onSubmit: any
  handleSubmit: any
}
const MyModal = ({visible, onDismiss, handleSubmit, onSubmit}: Props) => {
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
                <Image source={require('../assets/profile.png')} style={styles.image} />
            </View>
          <TouchableWithoutFeedback>
            
            {/* Este View es el contenido del modal, que ocupa la mitad inferior */}
            <View style={styles.modalContent}>
                <View style={{marginTop:40, alignItems: 'center'}}>
                    <Text variant="titleMedium" style={{ justifyContent: 'center'}}>
                            Upload Photo
                    </Text>
                </View>
                <View style={{height: '20%', justifyContent: 'center' }}>
                    <Text>
                        Are you sure you want to update?
                    </Text>

                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: '100%' }}>
                    <View style={{ paddingBottom: 20}}>
                        <Button mode="contained" onPress={handleSubmit(onSubmit)} >
                            Update Data
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

const MyModalConfirmation = ({visible, onDismiss }: mConfirmationProps) => {
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
                <Image source={require('../assets/profile.png')} style={styles.image} />
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

export const personalData = yup.object({
  name: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  lastName: yup.string().min(3, 'Last Name must be at least 3 characters').required('Last Name is required'),
  date: yup.date().required('Date is required'),
  country: yup.string().min(3, 'Country must be at least 3 characters').required('Country is required'),
  state: yup.string().min(3, 'State must be at least 3 characters').required('State is required'),
  city: yup.string().min(3, 'City must be at least 3 characters').required('City is required'),
  fullAddress: yup.string().min(3, 'Full Address must be at least 3 characters').required('Full Address is required'),
});

const PersonalDataScreen = () => {
    const [visible, setVisible] = useState(false);
    const [showMConfirmation, setShowMConfirmation] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(personalData),
    });

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    

    const onError = (data: any) => {
        console.log('#######', data)
        // if (!data){
            showModal();
        // }
        
    }

    const onSubmit = (data: any) => {
        console.log('Login Data:', data);
        
        let date = data.date;
        data.dateString = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
       
        console.log('aaaaaaa', data)
        hideModal()
        setShowMConfirmation(!showMConfirmation)


        // TODO: send data to api 
    };
    // const onSubmit = () => {

    // }



    return (
        <>
        <ScrollView>
            {/* <View> */}
            <View style={styles.container}>
                <Card style={styles.cardContainer}>
                    <View >
                        <Text variant="headlineSmall" style={styles.textTitle}>
                        My personal DAta
                        </Text>
                    </View> 
                    <Text variant="titleMedium" style={{marginTop:10, marginLeft: 10, marginRight: 10}}>
                        Details about my personal data
                    </Text>
                    <View style={styles.profileContainer}>
                        <Image source={require('../assets/profile.png')} style={styles.image} />
                        <Text variant="titleMedium" style={{marginTop:10, marginLeft: 10, marginRight: 10}}>
                            Upload Photo
                        </Text>
                    </View>
                    <View style={{margin:10}}>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    mode='outlined'
                                    label="Name"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )} 
                        />
                        {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}
                    </View>
                    <View style={{margin:10}}>
                        <Controller
                            control={control}
                            name="lastName"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    mode='outlined'
                                    label="Last Name"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )} 
                        />
                        {errors.lastName && <Text style={{ color: 'red' }}>{errors.lastName.message}</Text>}
                    </View>
                    <View style={{margin:10}}>
                        <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, value } }) => (
                                <DatePickerInput
                                    locale='es'
                                    mode='outlined'
                                    label="Date of Birhth"
                                    value={value}
                                    onChange={onChange}
                                    inputMode="end" // or "end" depending on desired behavior
                                />
                            )} 
                        />
                        {errors.date && <Text style={{ color: 'red' }}>{errors.date.message}</Text>}
                    </View>

                </Card>
                <Card style={styles.cardContainer}>
                    <View >
                        <Text variant="headlineSmall" style={styles.textTitle}>
                        Address
                        </Text>
                    </View> 
                    <Text variant="titleMedium" style={{marginTop:10, marginLeft: 10, marginRight: 10}}>
                        Your current domicile
                    </Text>
                    
                    <View style={{margin:10}}>
                        <Controller
                            control={control}
                            name="country"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    mode='outlined'
                                    label="Country"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )} 
                        />
                        {errors.country && <Text style={{ color: 'red' }}>{errors.country.message}</Text>}
                    </View>
                    <View style={{margin:10}}>
                        <Controller
                            control={control}
                            name="state"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    mode='outlined'
                                    label="State"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )} 
                        />
                        {errors.state && <Text style={{ color: 'red' }}>{errors.state.message}</Text>}
                    </View>
                    <View style={{margin:10}}>
                        <Controller
                            control={control}
                            name="city"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    mode='outlined'
                                    label="City"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )} 
                        />
                        {errors.city && <Text style={{ color: 'red' }}>{errors.city.message}</Text>}
                    </View>
                    <View style={{margin:10}}>
                        <Controller
                            control={control}
                            name="fullAddress"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    mode='outlined'
                                    label="Full Address"
                                    value={value}
                                    multiline={true}
                                    onChangeText={onChange}
                                    numberOfLines={4} // Optional: Sets an initial number of visible lines
                                    style={styles.multilineInput} // Apply custom styles for visual appearance
                                    textAlignVertical="top"
                                />
                            )} 
                        />
                        {errors.fullAddress && <Text style={{ color: 'red' }}>{errors.fullAddress.message}</Text>}
                    </View>
                </Card>
                {/* <View style={styles.conytainerBottom}>
                    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                        Update
                    </Button>
                </View> */}
                
            </View>
            <View style={styles.conytainerBottom}>
                <Button mode="contained" onPress={handleSubmit(onError)} >
                {/* <Button mode="contained" onPress={handleSubmit(onSubmit)} > */}

                    Update
                </Button>
            </View>
            
            {/* </View> */}
                {/* <MyModal visible={visible} onDismiss={hideModal}/> */}
        

        </ScrollView>
        {/* <PaperProvider>
            <Portal> */}
                <MyModal visible={visible} onDismiss={hideModal} handleSubmit={handleSubmit} onSubmit={onSubmit}/>
                <MyModalConfirmation visible={showMConfirmation} onDismiss={setShowMConfirmation}/>
            {/* </Portal>
        </PaperProvider> */}
        
        {/* <View style={styles.containerModalConfirmation}>
            <View style={{height:'60%'}}>
            </View>
            <View style={{height:'40%', backgroundColor: MD2Colors.blue200}}>
                <Text variant="titleMedium" style={{marginTop:10, marginLeft: 10, marginRight: 10, }}>
                    Your current domicile
                </Text>
            </View>

        </View> */}
        </>
        

    )

}

const styles = StyleSheet.create({ 
  container: {
    // flex: 1,t
    height: '90%',
    // backgroundColor: theme.colors.primaryContainer,
    padding: 20
  },
  profileContainer: {
    // zIndex:2,
    flex: 0, // O el valor que necesites para que el contenedor ocupe espacio
    justifyContent: 'center', // Centra verticalmente los elementos hijos
    alignItems: 'center',     // Centra horizontalmente los elementos hijos
    
  },
  cardContainer: {
    // marginTop: 60,
    // height: '100%'
    paddingBottom:20,
    marginBottom:20
  },
  image:{
    width:100,
    height: 100
  },
  textTitle:{
    // marginTop: 60,
    paddingLeft:10,
    paddingTop:10,
    textAlign: 'left',
    
  },
  colorIcon: {
    color: '#795FFC'
  },
  multilineInput: {
    minHeight: 100, // Example: Set a minimum height for the textarea
    // Add other styles as needed, e.g., padding, margin, border
  },
  conytainerBottom: {
    height: '10%',
    padding: 20,
    backgroundColor: MD2Colors.white
  },
  containerModalConfirmation: {
    zIndex: 10,
    // flex: 1,
    // justifyContent: 'center', // Centra verticalmente los elementos hijos
    // alignItems: 'center', 
    // height: '10%',
    // padding: 20,
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // zIndex: 1, // Asegura que esté encima de otros elementos
    // backgroundColor: 'white',
    // padding: 20,
    height: '100%',
    // backgroundColor: MD2Colors.black,
    // opacity: 0.3,
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
  profileModalContainer: {
    zIndex:100,
    // marginTop: 40,
    // flex: 4, // O el valor que necesites para que el contenedor ocupe espacio
    // justifyContent: 'center', // Centra verticalmente los elementos hijos
    alignItems: 'center',     // Centra horizontalmente los elementos hijos
    justifyContent: 'flex-end', // Alinea el contenido a la parte inferior
    bottom: -40
  },
});

export default PersonalDataScreen;
