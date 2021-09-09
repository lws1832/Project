import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Alert,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

import { CredentialsContext } from '../store/CredentialsContext';

export default function Logout(){
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const navigation = useNavigation();

    // 사용자 토큰 삭제
    const deleteToken = async () => {
        await AsyncStorage
        .removeItem('@User:Token')
        .then(() => {
            setStoredCredentials(''),
            setTimeout(() => {
                navigation.navigate('GoogleLogin');
                console.log('로그아웃 완료');
            }, 1000);
        })
        .catch((e) => console.log(e));
    };
      
    return (
        <>
            <View style={styles.header}>
                <View style={styles.iconBookmark}>
                    <TouchableOpacity
                        onPress={deleteToken}
                        style={styles.iconTouch}
                    >
                        <AntDesign name="logout" size={32} color="black" />
                    </TouchableOpacity>
                    {/* <Text onPress={clear}>ClearTest</Text> */}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        marginTop:10,
        flexDirection:'row',
    },
    iconBack:{
        padding:10,
    },
    iconBookmark:{
        padding:10,
        marginLeft:"auto",
    },
    iconTouch:{
        width:60,
        height:60,
        justifyContent:"center",
        alignItems:"center",
    },
});