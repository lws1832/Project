import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function InquireList(){
    const list = [
        {
            id: 1,
            title: '버그 발견.. 고쳐주세요ㅠㅠ',
            date: '2021-08-10 13:50',
            content:'문의 내용11\n문의 내용22',
        },
        {
            id: 2,
            title: '이런 부분은 개선했으면 합니다.',
            date: '2021-08-09 16:07',
            content:'문의 내용11\n문의 내용22',
            answer: '답변내용11\n답변내용22',
        },
        {
            id: 3,
            title: '후원은 어떻게 하나요?',
            date: '2021-08-07 10:49',
            content:'문의 내용11\n문의 내용22',
            answer: '답변내용11\n답변내용22',
        },
        {
            id: 4,
            title: '스크를 확인용11',
            date: '****-**-** **:**',
            content:'문의 내용11\n문의 내용22',
        },
        {
            id: 5,
            title: '스크를 확인용22',
            date: '****-**-** **:**',
            content:'문의 내용11\n문의 내용22',
        },
        {
            id: 6,
            title: '스크를 확인용33',
            date: '****-**-** **:**',
        },
        {
            id: 7,
            title: '스크를 확인용44',
            date: '****-**-** **:**',
        }
    ]

    const [showInquire, setShowInquire] = useState(false);
    const [icon,setIcon] = useState("chevron-right");

    const iconChange = () => {
        if (showInquire){
            setIcon("chevron-right");
        } else{
            setIcon("chevron-down");
        }
    }

    const renderList = ({item}) => {
        return(
            <View style={styles.InquireBox}>
                <TouchableOpacity
                    style={styles.InquireList}
                    onPress={() => {setShowInquire(!showInquire), iconChange()}}
                >
                    <Text style={styles.InquireTitle}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            {
                                item.answer == null
                                ? (
                                    <Text style={{
                                        backgroundColor: "tomato",
                                        ...styles.roundBox
                                    }}>
                                        답변대기
                                    </Text>
                                )
                                :
                                <Text style={{
                                    backgroundColor: "rgba(39, 174, 170, 0.83)",
                                    ...styles.roundBox
                                }}>
                                    답변완료
                                </Text>
                            }
                            
                            <Text style={styles.InquireTitle}>{item.title}</Text>
                        </View>
                    </Text>
                    <Text style={styles.InquireDate}>
                        {item.date}
                    </Text>
                    <View style={styles.iconEnter}>
                        <Entypo name={icon} size={20} color="black" />
                    </View>
                </TouchableOpacity>
                {
                    showInquire
                    ? (
                        <View style={styles.InquireView}>
                            <View style={styles.InquireContent}>
                                <Text style={{ color: "#999" }}>
                                    {item.content}
                                </Text>
                            </View>
                            {
                                item.answer == null
                                ? null
                                : (
                                    <View style={styles.InquireAnswer}>
                                        <Text style={{ padding: 5 }}>
                                            {item.answer}
                                        </Text>
                                    </View>
                                )
                            }

                        </View>
                    )
                    : null
                }
            </View>
        );
    }
 
    return(
        <FlatList
            data={list}
            renderItem={renderList}
        />
    );
} 

const styles = StyleSheet.create({
    InquireBox:{
        marginBottom:10,
    },
    InquireList:{
        padding:10,
        borderWidth:1,
        borderColor:"lightgray",
        borderBottomWidth:1,
        borderBottomColor:"#333",
        backgroundColor:"#fff",
    },
    InquireTitle:{
        flex:1,
        fontSize:18,
        fontWeight:"900",
    },
    InquireDate:{
        fontSize:15,
        fontWeight:"100",
        color:"#999",
    },
    iconEnter:{
        position:"absolute",
        top:20,
        right:10,
    },
    InquireView:{
        padding:10,
        borderWidth:1,
        borderColor:"lightgray",
        borderBottomWidth:1,
        borderBottomColor:"#333",
        backgroundColor:"#fff",
    },
    InquireAnswer:{
        marginTop:10,
        borderWidth:1,
        borderColor:"lightgray",
        backgroundColor:"#eee"
    },
    roundBox:{
        marginRight:5,
        padding:5,
        fontSize:12,
        color:"#fff",
        borderRadius:10,
    },
});