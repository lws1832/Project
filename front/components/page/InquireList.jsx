import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function InquireList(){
    const data = [
        {
            id: 1,
            title: '버그 발견.. 고쳐주세요ㅠㅠ',
            inqDate: '2021-08-10 13:50',
            content:'문의 내용11\n문의 내용22',
        },
        {
            id: 2,
            title: '이런 부분은 개선했으면 합니다.',
            inqDate: '2021-08-09 16:07',
            content:'문의 내용11\n문의 내용22',
            answer: '답변내용11\n답변내용22',
            ansDate: '2021-08-10 09:35',
        },
        {
            id: 3,
            title: '후원은 어떻게 하나요?',
            inqDate: '2021-08-07 10:49',
            content:'문의 내용11\n문의 내용22',
            answer: '답변내용11\n답변내용22',
            ansDate: '2021-08-07 11:50',
        },
        {
            id: 4,
            title: '스크를 확인용11',
            inqDate: '****-**-** **:**',
            content:'문의 내용11\n문의 내용22',
        },
        {
            id: 5,
            title: '스크를 확인용22',
            inqDate: '****-**-** **:**',
            content:'문의 내용11\n문의 내용22',
        },
        {
            id: 6,
            title: '스크를 확인용33',
            inqDate: '****-**-** **:**',
        },
        {
            id: 7,
            title: '스크를 확인용44',
            inqDate: '****-**-** **:**',
        }
    ]
 
    return(
        <>
            {
                data.map((e,k) => (
                    <InquireData
                        key={e.id}
                        title={e['title']}
                        inqDate={e['inqDate']}
                        content={e['content']}
                        answer={e['answer']}
                        ansDate={e['ansDate']}
                    />
                ))
            }
        </>
    );
}

function InquireData({title, inqDate, content, answer, ansDate}){
    
    const [showInquire, setShowInquire] = useState(false);
    const [icon,setIcon] = useState("chevron-right");

    const onPressed = () => {
        setShowInquire(!showInquire);
        if (showInquire){
            setIcon("chevron-right");
        } else{
            setIcon("chevron-down");
        }
    }

    return(
        <View style={styles.InquireBox}>
            <TouchableOpacity
                style={{
                    ...styles.InquireList,
                }}
                onPress={onPressed}
            >
                <View style={{ flex: 1, flexDirection: "row" }}>
                    {
                        answer == null
                        ? (
                            <Text style={{
                                backgroundColor: "tomato",
                                ...styles.roundBox,
                                answer
                            }}>
                                답변대기
                            </Text>
                        )
                        : (
                            <Text style={{
                                backgroundColor: "rgba(39, 174, 170, 0.83)",
                                ...styles.roundBox
                            }}>
                                답변완료
                            </Text>
                        )
                    }
                    <Text style={styles.InquireTitle}>{title}</Text>
                </View>
                <Text style={styles.InquireDate}>
                    {inqDate}
                </Text>
                <View style={styles.iconEnter}>
                    <Entypo name={icon} size={20} color="black" />
                </View>
            </TouchableOpacity>
            {
                showInquire
                ? (
                    <View style={styles.InquireView}>
                        <Text style={styles.InquireContent}>{content}</Text>
                        {
                            answer == null
                            ? null
                            : (
                                <View style={styles.InquireAnswer}>
                                    <View style={{flexDirection:"row", marginBottom:5}}>
                                        <MaterialCommunityIcons name="subway-variant" size={16} color="#000" />
                                        <Text style={{marginLeft:5, color:"#999"}}>{ansDate}</Text>
                                    </View>
                                    <Text>{answer}</Text>
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

const styles = StyleSheet.create({
    InquireBox:{
        marginBottom:10,
    },
    InquireList:{
        padding:10,
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:3,
        backgroundColor:"#fff",
    },
    InquireTitle:{
        flex:1,
        fontSize:18,
        fontWeight:"900",
    },
    InquireDate:{
        fontSize:15,
        color:"#999",
    },
    InquireContent:{
        marginRight:30,
        padding:10,
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:3,
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
        borderTopWidth:0,
        borderBottomWidth:1,
        borderBottomColor:"#333",
        borderRadius:3,
        backgroundColor:"#fff",
    },
    InquireAnswer:{
        marginTop:10,
        marginLeft:30,
        padding:10,
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:3,
        backgroundColor:"#F8EFCE"
    },
    roundBox:{
        marginRight:5,
        padding:5,
        fontSize:12,
        color:"#fff",
        borderRadius:10,
    },
});