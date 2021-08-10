import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Login() {
    return (
        <View style={styles.container}>

            {/* content */}
            <StatusBar barStyle={'default'} />
            <View style={styles.content}>
                <Text>로그인 화면</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    /* area */
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {

    },

    /* content */

});