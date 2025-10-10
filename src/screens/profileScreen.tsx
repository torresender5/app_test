import { StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';


const ProfileScreen = () => {
    return (
        <View style={styles.container}> 
        <Text>
             esta es la vista de ProfileScreen
        </Text>
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});


export default ProfileScreen;