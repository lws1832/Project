import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import * as Google from 'expo-google-app-auth';
import NaviMenu from './navigator/NaviMenu';

const GoogleLogin = ({ navigation }) => {
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [isLogin, setIslogin] = useState(false);

  const handleGoogleLogin = async () => {
    setGoogleSubmitting(true);
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
              id: id,
              name: name,
              email: email,
            }
            console.log('데이터가 왔나요?', data)
            const url = 'http://192.168.0.14:3000/user/create';
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

        } else {
          console.log('Google 로그인이 취소 되었습니다.');
        }
        setIslogin(true);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  return(
    <>
      {
        !isLogin
        ? (
            <TouchableOpacity onPress={handleGoogleLogin} google={true}>
              <Text google={true} style={styles.submitBtn}>구글 로그인</Text>
            </TouchableOpacity>
        )
        : <NaviMenu isLogin={isLogin} />
      }
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