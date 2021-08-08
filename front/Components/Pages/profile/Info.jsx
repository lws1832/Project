import React from 'react';
import { View,Text,StyleSheet, Button } from 'react-native';


export default function InfoPages(){
    return(
        <View style={styles.container}>
         <Text>
             이름 : 돌덩이
         </Text>
         <Text>
             이메일 : wow@naver.com
         </Text>
         <Text>
             가입날짜 : 2017-10-11
         </Text>
         <Button title="회원탈퇴" />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
  })