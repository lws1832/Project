import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

import IPv4 from '../../ipconfig';

export default function NoticeList(){
    const [noticeList, setNoticeList] = useState([]);
    const [isRetrieve, setisRetrieve] = useState(false);

    useEffect(() => {
        const getNoticeList = async () => {
            let result = await axios.get(`http://${IPv4}:3000/profile/notice/read`);

            setNoticeList(result.data.result);
            if (noticeList != null){
                setisRetrieve(true);
            }
        }
        getNoticeList();
    }, [])
 
    return(
        <>
            {
                isRetrieve
                ? (
                    noticeList.map((e,k) => (
                        <NoticeData
                            key={e.id}
                            title={e.title}
                            date={e.date}
                            content={e.content}
                        />
                    ))
                )
                : null
            }
        </>
    );
}

function NoticeData({title, date, content}){
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
                    <Text style={styles.noticeContent}>{content}</Text>
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