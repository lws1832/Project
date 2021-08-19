import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserInfo(){
    return(
        <View style={styles.container}>
            <Text>내 정보페이지</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})