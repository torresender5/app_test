import { StyleSheet, View, Image} from 'react-native';
import { useTheme, Card, Text, Menu, MD2Colors } from 'react-native-paper';
import { theme } from '../theme/theme';
import Icon from '@react-native-vector-icons/material-design-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
  const theme = useTheme();
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}> 
      <Card style={styles.cardContainer}>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/profile.png')} style={styles.image} />
        </View>
        <View >
          <Text variant="headlineMedium" style={styles.textTitle}>
            Administrador
          </Text>
        </View> 
        <Text variant="titleMedium" style={{marginTop:10, marginLeft: 10, marginRight: 10}}>
            Contact
        </Text>
        <View style={{backgroundColor: MD2Colors.grey200, borderRadius: 10, marginTop:10, marginLeft: 10, marginRight: 10}}>
            <Menu.Item leadingIcon={() => <Icon size={24} name="email" style={styles.colorIcon} />} title="Torresender5@gmail.com" />
            <Menu.Item leadingIcon={() => <Icon size={24} name="map-marker" style={styles.colorIcon} />} title="CAracas Venezuela" />
        </View>

        <Text variant="titleMedium" style={{marginTop:10, marginLeft: 10, marginRight: 10}}>
            Account
        </Text>
        <View style={{backgroundColor: MD2Colors.grey200, borderRadius: 10, marginTop:10, marginLeft: 10, marginRight: 10}}>
            <Menu.Item leadingIcon={() => <Icon size={24} name="account" style={styles.colorIcon} />} style={{width:'100%'}} title="Personal Data"  onPress={() => navigate('PersonalData')}/>
        </View>

        <Text variant="titleMedium" style={{marginTop:10, marginLeft: 10, marginRight: 10}}>
            Settings
        </Text>
        <View style={{backgroundColor: MD2Colors.grey200, borderRadius: 10, marginTop:10, marginLeft: 10, marginRight: 10}}>
            <Menu.Item leadingIcon={() => <Icon size={24} name="lock-reset" style={styles.colorIcon} />} title="change Password" onPress={() => navigate('ChangePassword')}/>
        </View>

      </Card>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    // flex: 1,t
    height: '100%',
    backgroundColor: theme.colors.primaryContainer
  },
  profileContainer: {
    zIndex:2,
    flex: 1, // O el valor que necesites para que el contenedor ocupe espacio
    justifyContent: 'center', // Centra verticalmente los elementos hijos
    alignItems: 'center',     // Centra horizontalmente los elementos hijos
  },
  cardContainer: {
    marginTop: 60,
    height: '100%'
  },
  image:{
    width:100,
    height: 100
  },
  textTitle:{
    marginTop: 60,
    textAlign: 'center',
    
  },
  colorIcon: {
    color: '#795FFC'
  }
});


export default ProfileScreen;