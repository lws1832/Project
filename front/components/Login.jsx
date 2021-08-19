import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Login({navigation}) {
    const [user_password, setUser_password] = useState('');
    const [user_email, setUser_email] = useState('');

    const userSubmit = async (user_password, user_email ) => {
        if (user_password == ''){
            Alert.alert('비밀번호 입력은 필수 사항입니다.');
        } else if (user_email == ''){
            Alert.alert('넥네임 입력은 필수 사항입니다.');
        } else{
            try{
                // console.log('111까지 옴');
              
                let url = `http://192.168.0.3:3000/user/read`;

                try{
                    // console.log('222까지 옴');
                    await fetch (url);
                    // console.log('333까지 옴');

                    // setUser_password('');
                    // setUser_email('');
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
                        placeholder="이메일"
                        type="text"
                        name="user_email"
                        value={user_email}
                        onChangeText={text => setUser_email(text)}
                        style={styles.textBox}
                    />
                    <TextInput
                        placeholder="비밀번호"
                        type="password"
                        name="password"
                        value={user_password}
                        onChangeText={password => setUser_password(password)}
                        style={styles.textBox}
                        secureTextEntry={true}
                    />
                </View>
                
                <View style={styles.halfContainer}>
                <Text onPress={()=>navigation.navigate('Signup')}>회원가입 페이지이동</Text>
                
                    <TouchableOpacity
                       
                        onPress={
                            () => userSubmit( user_email, user_password)
                        }
                        style={styles.submitBtn}
                    >
                        <Text onPress={()=>navigation.navigate('NaviMeun')}>로그인</Text>
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