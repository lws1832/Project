import React from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity, Touchable } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Inquire(){
    return(
        <View style={styles.container}>
            <View style={{flex:0.5, ...styles.box}}>
                <Text style={styles.title}>제목</Text>
                <View style={styles.content}>
                    <TextInput
                        style={styles.textBox}
                    />
                </View>
            </View>
            <View style={{flex:3, ...styles.box}}>
                <Text style={styles.title}>문의 내용</Text>
                <View style={styles.content}>
                    <TextInput
                        style={styles.textBox}
                    />
                </View>
            </View>
            <View style={{flex:2, ...styles.box}}>
                <Text style={styles.title}>첨부 파일</Text>
                <View style={styles.content}>
                    <TextInput
                        style={styles.textBox}
                    />
                </View>
                {/* <Text>이미지 파일(JPG,PNG,GIF)을 기준으로 최대 10MB 이하, 최대 3개까지만 등록 가능합니다.</Text> */}
            </View>
            <View style={{flex:1.2, ...styles.box}}>
                <Text style={styles.title}>약관 동의</Text>
                <View style={styles.content}>
                    <TouchableOpacity >
                        <Text style={styles.longBtn}>
                            <Entypo name="check" size={24} color="#fff" />
                            개인 정보 수집 및 이용 동의
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{marginVertical:5, textAlign:"right", color:"lightgray"}}>
                            개인 정보 수집 및 이용 동의 내용 보기
                            <AntDesign name="caretdown" size={16} color="lightgray" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1, ...styles.box}}>
                <TouchableOpacity style={{flex:1}}>
                    <Text style={{backgroundColor:"rgba(39, 174, 170, 0.83)", ...styles.bigBtn}}>작성 완료</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}}>
                    <Text style={{backgroundColor:"gray", ...styles.bigBtn}}>취소</Text>    
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    /* area */
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    box:{
        flexDirection:"row",
        marginTop:10,
    },
    title:{
        flex:0.8,
        marginHorizontal:10,
        justifyContent:"center",
        alignItems:"center",
        fontSize:18,
        fontWeight:"900",
    },
    content:{
        flex:2,
        marginRight:10,
    },
    textBox:{
        flex:1,
        borderWidth:1,
        borderColor:"lightgray",
    },
    longBtn:{
        paddingHorizontal:20,
        paddingTop:5,
        paddingBottom:10,
        textAlign:"center",
        color:"#fff",
        backgroundColor:"lightgray",
    },
    bigBtn:{
        flex:1,
        paddingVertical:15,
        fontSize:18,
        textAlign:"center",
        color:"#fff",
    }
});