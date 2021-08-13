import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function NoticeList(){
    const data = [
        {
            id: 1,
            title: '서비스 정상화 안내',
            date: '2021-08-10 09:32',
            view:
                <Text>
                    안드로이드 OS 10 배포에 따라 데이터 알고리즘 업데이트를 진행하였으나,
                    업데이트 이후 일부 데이터의 누락 현상이 확인되어 데이터 긴급 복구를 진행했습니다.{"\n"}
                    현재는 모두 정상화 되었으며, 문제 없이 이용하실 수 있습니다.{"\n"}
                    이용에 불편을 드려 죄송합니다.{"\n"}
                    감사합니다.
                </Text>
        },
        {
            id: 2,
            title: '버그 수정 및 기능 업데이트 안내',
            date: '2021-08-01 13:01',
            view:
            <Text>
                새 기능과 관련하여 업데이트 된 내역과 버그로 확인되어 수정 된 내용들을 안내 드립니다.{"\n"}{"\n"}
                - 새 기능11{"\n"}
                - 새 기능22{"\n"}
                - 버그 수정11{"\n"}
                - 버그 수정22{"\n"}{"\n"}
                감사합니다.
            </Text>
        },
        {
            id: 3,
            title: '사용자분들에 대한 감사의 말',
            date: '2021-07-24 17:29',
            view:
            <Text>
                안녕하세요, 오디 개발자입니다.{"\n"}
                감사의 말11{"\n"}
                감사의 말22{"\n"}
                감사의 말33{"\n"}
                감사합니다.
            </Text>
        },
        {
            id: 4,
            title: '스크를 확인용11',
            date: '****-**-** **:**',
        },
        {
            id: 5,
            title: '스크를 확인용22',
            date: '****-**-** **:**',
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
    ];
 
    return(
        <>
            {
                data.map(e => (
                    <NoticeData
                        title={e['title']}
                        date={e['date']}
                        view={e['view']}
                    />
                ))
            }
        </>
    );
}

function NoticeData({title, date, view}){
    const [showNotice, setShowNotice] = useState(false);
    const [icon,setIcon] = useState("chevron-right");

    const onPressed = () => {
        setShowNotice(!showNotice);
        if (showNotice){
            setIcon("chevron-right");
        } else{
            setIcon("chevron-down");
        }
    }

    return(
        <>
            <TouchableOpacity
                style={styles.noticeList}
                onPress={onPressed}
            >
                <Text style={styles.noticeTitle}>{title}</Text>
                <Text style={styles.noticeDate}>{date}</Text>
                <View style={styles.iconEnter}>
                    <Entypo name={icon} size={20} color="black" />
                </View>
            </TouchableOpacity>
                <View style={{
                    ...styles.noticeView,
                    display: showNotice ? 'flex' : 'none',
                }}>
                    <Text style={styles.noticeContent}>{view}</Text>
                </View>

        </>
    );
}

const styles = StyleSheet.create({
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
    },
    noticeView:{
        marginBottom:40,
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:"#333",
    },
    noticeContent:{
        color:"#999",
    },
});