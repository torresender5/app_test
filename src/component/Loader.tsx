import * as React from 'react';
// import { View } from 'react-native';
// import { ActivityIndicator, MD2Colors } from 'react-native-paper';

// import React from 'react';
   import { StyleSheet, View, Modal } from 'react-native';
   import { ActivityIndicator, useTheme } from 'react-native-paper';

// const Loader = () => {
//     return (
//         <View style={{backgroundColor: MD2Colors.black, opacity: 0.5, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <ActivityIndicator animating={true} color={MD2Colors.purple500} />
//         </View>
//     )

// }

// export default Loader;


interface Show {
    show: boolean
}


const Loader = ( {show}: Show) => {
    const theme = useTheme();

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={show}
            statusBarTranslucent={true} // Para que el modal se ajuste a la barra de estado
        >
            <View style={styles.overlay}>
                <View style={styles.loaderContainer}>
                    <ActivityIndicator animating={true} size="large" color={theme.colors.primary} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: 20,
        borderRadius: 10,
    },
});

export default Loader;