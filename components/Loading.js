import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>로딩 중</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:"#FDF6AA",
    },
    text:{
        color:"#2c2c2c",
        fontSize:35,
    }
})