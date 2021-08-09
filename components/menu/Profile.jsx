import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

import Space from '../layout/Space';
import Subject from '../layout/Subject';
// import Menu from '../layout/Menu';

export default function Profile({navigation}){
    const alertTest = () => {
        console.log('클릭함');
        Alert.alert("클릭함");
    }

    return(
        <View style={styles.container}>

            <Space />
            <Subject />

            {/* content */}
            <View style={styles.content}>
                <View style={{flex:1}}>
                    <Text style={styles.userName}>이우성님</Text>
                </View>
                <View style={{flex:5, marginVertical:50}}>

                    <TouchableOpacity
                        style={styles.menuTouch}
                        onPress={()=>{navigation.navigate('내 정보');}}
                    >
                        <Text style={styles.menuText}>내 정보</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuTouch}
                        onPress={()=>{navigation.navigate('공지사항');}}
                    >
                        <Text style={styles.menuText}>공지사항</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuTouch}
                        onPress={()=>{navigation.navigate('문의 또는 의견 작성');}}
                    >
                        <Text style={styles.menuText}>문의 또는 의견 작성</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.menuTouch}
                        onPress={()=>{navigation.navigate('이용 약관 및 개인 정보 처리 방침');}}
                    >
                        <Text style={styles.menuText}>이용 약관 및 개인 정보 처리 방침</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Space />
            {/* <Menu /> */}

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
    userName:{
        marginHorizontal:25,
        fontSize:40,
        fontWeight:"bold",
    },
    menuTouch:{
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