import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Formik } from 'formik';

export default function Signup({navigation}) {
    const [user_password, setUser_password] = useState('');
    const [user_password_,setUser_password_] = useState('')
    const [nickname, setNickname] = useState('');
    const [user_email, setUser_email] = useState('');


    const userSubmit = async ( nickname, user_email,user_password) => {
        if (user_password == ''){
            Alert.alert('password 입력은 필수 사항입니다.');
        } else if (nickname == ''){
            Alert.alert('넥네임 입력은 필수 사항입니다.');
        } else{
            try{
                
                console.log('111까지 옴');
                let data = {
                    nickname:nickname,
                    user_email:user_email,
                    user_password:user_password,
                }
                let url = `http://192.168.0.3:3000/user/create`;

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
                    setUser_password('');
                    setUser_password_('');
                    setNickname('');
                    setUser_email('');
                } catch (e){
                    console.log(e);
                }
            }
            catch (e){
                console.log(e);
            }
        }
    }

    return (
        <View style={styles.container}>

            {/* content */}
            <StatusBar barStyle={'default'} />
            <View style={styles.content}>
                <Text>회원가입 화면</Text>
                <View style={styles.halfContainer}>
   
                    <Text style={styles.title}></Text>
                    <TextInput
                        autoFocus
                        placeholder="이름"
                        type="text"
                        name="nickname"
                        value={nickname}
                        onChangeText={text => setNickname(text)}
                        style={styles.textBox}
                    />
                    <TextInput
                        placeholder="이메일"
                        type="text"
                        name="email"
                        value={user_email}
                        onChangeText={text => setUser_email(text)}
                        style={styles.textBox}
                    />
                     <TextInput
                        placeholder="비밀번호"
                        type="password"
                        name="user_password"
                        value={user_password}
                        onChangeText={password => setUser_password(password)}
                        style={styles.textBox}
                        secureTextEntry={true}
                    />
                       <TextInput
                        placeholder="비밀번호 확인"
                        type="password"
                        name="user_password_"
                        value={user_password_}
                        onChangeText={password => setUser_password_(password)}
                        style={styles.textBox}
                        secureTextEntry={true}
                    />
               
                </View>
                <View style={styles.halfContainer}>
                    <TouchableOpacity
                        onPress={
                            () => userSubmit( nickname, user_email,user_password)
                        }
                        style={styles.submitBtn}
                    >
                        <Text>회원가입</Text>
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