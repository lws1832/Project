import React from 'react';
import { Button, StyleSheet, TabBarIOS, Text, View } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';


export default function Profile({navigation}) {
    return (
        <View>
        <Text style={styles.my}>프로필 누구님</Text>
        <Text style={styles.list} title="정보"onPress={()=>{ navigation.navigate('내정보');}} >내정보</Text>
        <Text style={styles.list} title="공지사항"onPress={()=>{ navigation.navigate('공지사항');}} >공지사항</Text>
        <Text style={styles.list} title="이용약관"onPress={()=>{ navigation.navigate('이용약관');}} >이용 약관 및 개인 정보 처리 방침</Text>
        <Text style={styles.list} title="문의하기"onPress={()=>{ navigation.navigate('의견보내기');}} >의견 보내기</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    porofile: {
        fontSize: 34,
        marginTop: 15,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    my: {
        fontSize: 34,
        marginBottom: 10,
        color: "blue",
        fontWeight: 'bold',
    },
    list: {
        fontSize: 22,
        paddingVertical: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 15,
        marginTop: 30,
    },
    menu: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 10,
        marginTop: 220,
    },
})