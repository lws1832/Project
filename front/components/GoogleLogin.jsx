import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-google-app-auth';

import IPv4 from '../ipconfig';
import { CredentialsContext } from './store/CredentialsContext';

const GoogleLogin = ({ navigation }) => {
  // async-storage
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
  const [storageName, setUStorageName]= useState('');

  const handleGoogleLogin = async () => {
    const config = {
      iosClientId: `697029683/209-5sooo7am5l8g1e2btlrcccktml36cqnf.apps.googleusercontent.com`,
      androidClientId: `697029683209-tm8ldidid8kcl8ulksosgkvk58uns74v.apps.googleusercontent.com`,
      scopes: ['profile', 'email']
    };

    Google
      .logInAsync(config)
      .then((result) => {
        const { type, accessToken, user } = result;

        if (type == 'success') {
          try {
              let { id, name, email } = result.user;
              let { accessToken } = result;
              let data = {
                accessToken: accessToken,
                idx: id,
                name: name,
                email: email,
            }
<<<<<<< HEAD
            console.log('데이터가 왔나요?', data)
            const url = 'http://192.168.0.18:3000/user/create';
            try {
=======
            console.log('Login Data : ', data);
>>>>>>> 058d67049e4ac3c7179ecdbb1ddb4132a7852b1e

            const url = `http://${IPv4}:3000/user/create`;
            try{
              fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              });
            } catch (e){ console.log(e, '1단계 에러'); }
          } catch (e){ console.log(e, '2단계 에러'); }
          let { accessToken } = result;
          let { id, name } = user;
          persistLogin({ id, name, accessToken });
          setTimeout(() => {
            navigation.navigate('NaviMenu');
          }, 1000);
          console.log('로그인 완료');
        } else{
          console.log('로그인 취소');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const persistLogin = async (id, accessToken, name,) => {
    await AsyncStorage.setItem('@User:Token', JSON.stringify(id, name, accessToken))
    .then(() => {
      setStoredCredentials(id, name, accessToken);
    })
    .catch((error) => {
      console.log('Persisting login failed');
      console.log(error);
    });
  };

  const token = async ()=>{
    try{
    let value = await AsyncStorage.getItem('@User:Token');
    let data = JSON.parse(value);
    const nickName = data.name;
    console.log('닉네임?', nickName);
    setUStorageName(nickName);
    } catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    token();
  }, [])

  return(
    <>
      <TouchableOpacity onPress={handleGoogleLogin} google={true}>
        <Text google={true} style={styles.submitBtn}>구글 로그인</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  /* area */
  submitBtn: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "rgba(39, 174, 170, 0.83)",
  }
});

export default GoogleLogin;