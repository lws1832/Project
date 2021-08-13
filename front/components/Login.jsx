import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Login() {
    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const userSubmit = async (a, b, c) => {
        if (id == ''){
            Alert.alert('id 입력은 필수 사항입니다.');
        } else if (nickname == ''){
            Alert.alert('넥네임 입력은 필수 사항입니다.');
        } else{
            try{
                console.log('111까지 옴');
                let data = {
                    id:a,
                    nickname:b,
                    user_email:c,
                }
                let url = `http://192.168.0.9:3000/user/create`;

                try{
                    console.log('222까지 옴');
                    await fetch (url,{
                        method:'POST',
                        body:JSON.stringify(data),
                        headers:{
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log('333까지 옴');
                    setId('');
                    setNickname('');
                    setUserEmail('');
                } catch (e){
                    console.log(e);
                }
            } catch (e){
                console.log(e);
            }
        }
    }

    return (
        <View style={styles.container}>

            {/* content */}
            <StatusBar barStyle={'default'} />
            <View style={styles.content}>
                <Text>로그인 화면</Text>
                <View style={styles.halfContainer}>
                    <Text style={styles.title}>필수항목</Text>
                    <TextInput
                        autoFocus
                        placeholder="고유id(숫자)"
                        type="text"
                        name="id"
                        value={id}
                        onChangeText={text => setId(text)}
                        style={styles.textBox}
                    />
                    <TextInput
                        placeholder="nickname"
                        type="text"
                        name="nickname"
                        value={nickname}
                        onChangeText={text => setNickname(text)}
                        style={styles.textBox}
                    />
                </View>
                <View style={styles.halfContainer}>
                <Text style={styles.title}>선택항목</Text>
                    <TextInput
                        placeholder="E-mail"
                        type="text"
                        name="user_email"
                        value={userEmail}
                        onChangeText={text => setUserEmail(text)}
                        style={styles.textBox}
                    />
                    <TouchableOpacity
                        onPress={
                            () => userSubmit(id, nickname, userEmail)
                        }
                        style={styles.submitBtn}
                    >
                        <Text>전송</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    /* area */
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#fff",
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    content:{
        flex:1,
    },
    title:{
        marginBottom:20,
        fontSize:20,
        fontWeight:"bold",
    },
    textBox:{
        marginBottom:10,
        padding:10,
        width:300,
        height:40,
        borderWidth:1,
        borderColor:"lightgray",
    },
    submitBtn:{
        marginTop:20,
        padding:10,
        borderWidth:1,
        borderColor:"#000",
        backgroundColor:"rgba(39, 174, 170, 0.83)",
    }

    /* content */

});