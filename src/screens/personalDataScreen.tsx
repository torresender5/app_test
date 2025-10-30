import { useState } from 'react';
import { ScrollView, StyleSheet, View, Image} from 'react-native';
import { useTheme, Card, Text,TextInput, Menu, MD2Colors } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { theme } from '../utils/core/theme';
import Icon from '@react-native-vector-icons/material-design-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
import { useNavigation } from '@react-navigation/native';


const PersonalDataScreen = () => {
    const [text, setText] = useState("");
    const [inputDate, setInputDate] = useState<Date | undefined>(undefined);


    return (
        <ScrollView>
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
                        <TextInput
                            mode='outlined'
                            label="Name"
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <TextInput
                            mode='outlined'
                            label="Last Name"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={{borderColor: MD2Colors.yellow100}}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <DatePickerInput
                            locale='en'
                            mode='outlined'
                            label="Date of Birhth"
                            value={inputDate}
                            onChange={(d) => setInputDate(d)}
                            inputMode="start" // or "end" depending on desired behavior
                        />
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
                        <TextInput
                            mode='outlined'
                            label="Country"
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <TextInput
                            mode='outlined'
                            label="State"
                            value={text}
                            onChangeText={text => setText(text)}
                            style={{borderColor: MD2Colors.yellow100}}
                        />
                    </View>
                    <View style={{margin:10}}>
                        <TextInput
                            mode='outlined'
                            label="City"
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                    </View>
                </Card>
            </View>
        </ScrollView>

    )

}

const styles = StyleSheet.create({ 
  container: {
    // flex: 1,t
    height: '100%',
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
  }
});

export default PersonalDataScreen;
