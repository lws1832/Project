import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function Notice(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.noticeList}>
                <Text style={styles.noticeTitle}>
                    개인 정보 열람 및 수정에 대한 안내
                </Text>
                <Text style={styles.noticeDate}>
                    2021-08-10 09:32
                </Text>
                <View style={styles.iconEnter}>
                    <Entypo name="chevron-right" size={20} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noticeList}>
                <Text style={styles.noticeTitle}>
                    버그 수정 및 기능 업데이트 안내
                </Text>
                <Text style={styles.noticeDate}>
                    2021-08-01 13:01
                </Text>
                <View style={styles.iconEnter}>
                    <Entypo name="chevron-right" size={20} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noticeList}>
                <Text style={styles.noticeTitle}>
                    사용자분들에 대한 감사의 말
                </Text>
                <Text style={styles.noticeDate}>
                    2021-07-24 17:29
                </Text>
                <View style={styles.iconEnter}>
                    <Entypo name="chevron-right" size={20} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    /* area */
    container:{
        flex:1,
        marginHorizontal:20,
        marginVertical:20,
    },
    noticeList:{
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:"#333",
    },
    noticeTitle:{
        fontSize:20,
        fontWeight:"900",
    },
    noticeDate:{
        fontSize:18,
        fontWeight:"100",
        color:"#999",
    },
    iconEnter:{
        position:"absolute",
        top:40,
        right:0,
    }
});