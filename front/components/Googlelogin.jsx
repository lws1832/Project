

import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserName from './user';
import UserLogout from './UserLogout';



const Googlelogin = ({ navigation }) => {


  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);


  const handleGoogleLogin = async () => {
    setGoogleSubmitting(true);
    const config = {
      iosClientId: `697029683209-5sooo7am5l8g1e2btlrcccktml36cqnf.apps.googleusercontent.com`,
      androidClientId: `697029683209-tm8ldidid8kcl8ulksosgkvk58uns74v.apps.googleusercontent.com`,
      scopes: ['profile', 'email']
    };

    Google
      .logInAsync(config)
      .then((result) => {
        const { type, accessToken, user } = result;
        // console.log('타입은 먼가요? ',type)
        // console.log('무슨값이 오나요? ',result)

        if (type == 'success') {
          // Google.logOutAsync({accessToken, ...config})
          try {
            let { id, name, email } = result.user;
            let { accessToken } = result;
            let data = {
              accessToken: accessToken,
              id: id,
              name: name,
              email: email,
            }
            console.log('데이터가 왔나요?', data)
            const url = 'http://172.30.1.6:3000/user/create';
            try {

              fetch(url, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)

              });

            } catch (error) { console.log(error, '1단계에서 에러') }
          } catch (error) { console.log(error, '2단계에서 에러') }
          // const { email, name, photoUrl, id } = user;

          // persistLogin({ email, name, photoUrl, id }, 'Google 로그인성공', 'SUCCESS');

        } else {
          console.log('Google 로그인이 취소 되었습니다.');
        }

        setLoading(false)
        console.log('로그인 완료')
        setGoogleSubmitting(false);
      })

      .catch((error) => {
        console.log('구글 로그인 에러발생');
        console.log(error);
        setGoogleSubmitting(false);
      });
  };

  const handleGoogleLogout = async () => {
    const config = {
      iosClientId: `697029683209-5sooo7am5l8g1e2btlrcccktml36cqnf.apps.googleusercontent.com`,
      androidClientId: `697029683209-tm8ldidid8kcl8ulksosgkvk58uns74v.apps.googleusercontent.com`,
    };
    const { type, accessToken, user } = await Google.logInAsync(config);
    const { name } = user;
    if (type === 'success') {
      /* Log-Out */
      try {
        await Google.logOutAsync({ accessToken, name, ...config });
        console.log("로그아웃 되라", accessToken, name)
      } catch (err) {
        throw new Error(err)
      }
    }
  }

  const Time = () => {
    setTimeout(() => {
      navigation.navigate('NaviMeun')
    }, 3000);
  }
  return (
    <>
      {loading ?
        <TouchableOpacity
          onPress={handleGoogleLogin} google={true}>
          <Text google={true} style={styles.submitBtn}
          // onPress={()=>navigation.navigate('NaviMeun')}
          >구글 로그인</Text>
        </TouchableOpacity> :
        <Text><UserName />님 로그인중입니다.</Text>
      }
      <TouchableOpacity
        onPress={handleGoogleLogout}
      >
        <Text
          style={styles.submitBtn}
          onPress={() => navigation.navigate('NaviMeun')}
        >구글 로그아웃</Text>
      </TouchableOpacity>

      <Text
        style={styles.submitBtn}
        onPress={() => navigation.navigate('NaviMeun')}>
        검새창이동
      </Text>

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
export default Googlelogin;