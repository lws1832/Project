import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Space(){

    return <View style={styles.header} />;
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        marginTop:10,
    },
});