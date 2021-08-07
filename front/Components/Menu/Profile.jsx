import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  FontAwesome } from '@expo/vector-icons';
import Info from '../Pages/profile/Info'
import Notice from '../Pages/profile/Notice'
import Privacy from'../Pages/profile/Privacy'
import Question from '../Pages/profile/Question'

export default function Profile ()  {
    return(
  
    <View style={styles.container}>
        <Text style={styles.porofile}>프로필</Text>  
        <Text style={styles.my}>사용자</Text>         
        <Text style={styles.list}>내정보</Text>
        <Text style={styles.list}>공지사항</Text>   
        <Text style={styles.list}>문의하기 또는 의견보내기1234</Text>   
        <Text style={styles.list}>이용 약관 및 개인 정보 처리 방침</Text> 
        <Info />
        <View style={styles.menu}>
            <FontAwesome name="user" size={100} color="black" />
        </View>
    </View>
    )
        
}
const styles=StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
    },
    porofile :{
        fontSize:34,
        marginTop:15,
        marginBottom:8,
        fontWeight:'bold',
    },
    my :{
        fontSize:34,
        marginBottom:10,
        color: "blue",
        fontWeight:'bold',
    },
    list:{
        fontSize:22,
        paddingVertical: 10,
        borderRadius:6,
        borderWidth:1,
        borderColor:"black",
        paddingLeft:15,
        marginTop:30,
    },
    menu:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        padding: 10,
        marginTop:220,
      },
})