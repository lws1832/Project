import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Subject(){
    return(
        <View style={styles.subject}>
            <Text style={styles.title}>페이지 정보</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subject:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    title:{
        marginLeft:25,
        marginVertical:10,
        fontSize:40,
        fontWeight:"bold",
        color:"rgb(41, 128, 185)",
    },
});