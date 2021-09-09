import React, { useState, useContext, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from '../store/CredentialsContext';
import Space from '../layout/Space';
import Logout from '../layout/Logout';

export default function Profile({navigation}){
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const [storageName,setUStorageName]= useState('');

    // 사용자 닉네임 가져오기
    const getNickname = async () => {
        try {
            let value = await AsyncStorage.getItem('@User:Token');
            let data = JSON.parse(value);
            const nickName = data.name;
            setUStorageName(nickName);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getNickname();
    }, []);

    const list = [
        {
            id: 1,
            icon:'user',
            navigate:'내 정보',
            title:'내 정보',
        },
        {
            id: 2,
            icon:'blackboard',
            navigate:'공지사항',
            title:'공지사항',
        },
        {
            id: 3,
            icon:'chat',
            navigate:'문의 또는 의견 작성',
            title:'문의 또는 의견 작성',
        },
        {
            id: 4,
            icon:'clipboard',
            navigate:'이용 약관 및 개인 정보 처리 방침',
            title:'이용 약관 및 개인 정보 처리 방침',
        },
    ]

    const renderList = ({item}) => {
        return(
            <TouchableOpacity
                onPress={() => { navigation.navigate(item.navigate); }}
                style={styles.menuTouch}
            >
                <View style={{marginTop:2, marginRight:20}}>
                    <Entypo name={item.icon} size={12} color="black" />
                </View>
                <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>

            <Logout />

            {/* 페이지 명 */}
            <View style={styles.subject}>
                <Text style={styles.title}>프로필</Text>
            </View>

            {/* content */}
            <View style={styles.content}>
                <View style={{ flex:1 }}>
                    <Text style={styles.userName}>{storageName != '' ? storageName : ''}님</Text>
                </View>
                <View style={{ flex:5, marginVertical:50 }}>
                    <FlatList
                        data={list}
                        renderItem={renderList}
                    />
                </View>
            </View>

            <Space />
        </View>
    )

}
const styles=StyleSheet.create({
    /* area */
    container: {
        flex:1,
        backgroundColor:"#fff",
    },
    content:{
        flex:7,
    },

    /* content */
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
    userName:{
        marginHorizontal:25,
        fontSize:40,
        fontWeight:"bold",
    },
    menuTouch:{
        flexDirection:"row",
        marginHorizontal:30,
        marginVertical:10,
        paddingHorizontal:15,
        paddingVertical: 10,
        borderWidth:1,
        borderRadius:8,
        borderColor:"lightgray"
    },
    menuText:{
        fontSize:15,
        color:"#777",
    },
})