import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Modal } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function Inquire(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const [file, setFile] = useState('');
    
    const [agree, setAgree] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const inqSubmit = async (title, content) => {
        if (title == ''){
            Alert.alert('문의 제목을 입력해주세요.');
        } else if (content == ''){
            Alert.alert('문의 내용을 입력해주세요.');
        } else if (agree == false){
            Alert.alert('개입 정보 수집 및 이용에 동의해주세요.');
        } else{
            try{
                console.log('111까지 옴');
                let url = `http://192.168.0.6:3000/inquire/create`;
                let data = {
                    title:title,
                    content:content,
                    // file:file,
                }
                try{
                    console.log('222까지 옴');
                    await fetch (url,{
                        method:'POST',
                        body:JSON.stringify(data),
                        headers:{
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log('333까지 옴');
                    setTitle('');
                    setContent('');
                    Alert.alert('문의가 접수되었습니다.');
                } catch (e){
                    console.log(e);
                }
            } catch (e){
                console.log(e);
            }
        }
    }

    const agreeTerms = () => {
        setAgree(!agree);
        console.log('동의여부 : ', agree);
    }

    const emptyText = () => {
        setTitle('');
        setContent('');
    }

    return(
        <View style={styles.container}>

            {/* 제목 */}
            <View style={{flex:0.5, ...styles.box}}>
                <Text style={styles.title}>제목</Text>
                <View style={styles.content}>
                    <TextInput
                        type="text"
                        name="title"
                        value={title}
                        onChangeText={text => setTitle(text)}
                        style={styles.textBox}
                    />
                </View>
            </View>

            {/* 문의 내용 */}
            <View style={{flex:3, ...styles.box}}>
                <Text style={styles.title}>문의 내용</Text>
                <View style={styles.content}>
                    <TextInput
                        type="text"
                        name="content"
                        value={content}
                        onChangeText={text => setContent(text)}
                        style={styles.textBox}
                    />
                </View>
            </View>

            {/* 첨부 파일 */}
            <View style={{flex:2, ...styles.box}}>
                <Text style={styles.title}>첨부 파일</Text>
                <View style={styles.content}>
                    <TextInput
                        style={styles.textBox}
                    />
                </View>
                {/* <Text>이미지 파일(JPG,PNG,GIF)을 기준으로 최대 10MB 이하, 최대 3개까지만 등록 가능합니다.</Text> */}
            </View>

            {/* 약관 동의 */}
            <View style={{flex:1.2, ...styles.box}}>
                <Text style={styles.title}>약관 동의</Text>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => agreeTerms()}>
                        <View style={{
                            ...styles.longBtn,
                            backgroundColor: agree ? 'rgba(39, 174, 170, 0.83)' : 'lightgray',
                        }}>
                            <Text style={styles.longBtnText}>개인 정보 수집 및 이용 동의</Text>
                            <View style={{
                                ...styles.iconCheck,
                                display: agree ? 'flex' : 'none',
                            }}>
                                <Entypo name="check" size={14} color="#fff" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginVertical:5, textAlign:"right", color:"lightgray"}}
                        onPress={() => {setModalVisible(true)}}
                    >
                        <Text style={{textAlign:"right", color:"lightgray"}}>개인 정보 수집 및 이용 동의 내용 보기</Text>

                        {/* 개인 정보 수집 이용 동의 모달 화면 */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={styles.modalWrap}>
                                <View style={styles.modalView}>
                                    <Text style={{fontSize:20}}>개인 정보 수집 이용 동의</Text>
                                    <Text style={styles.modalText}>~~~~~~~~~~~~~~~~~</Text>

                                    <TouchableOpacity
                                        style={styles.modalClose}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <Text style={styles.btnText}>닫기</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 하단 버튼 */}
            <View style={{flex:1, ...styles.box}}>
                <TouchableOpacity
                    onPress={() => inqSubmit(title, content)}
                    style={{flex:1}}
                >
                    <Text style={{backgroundColor:"rgba(39, 174, 170, 0.83)", ...styles.bigBtn}}>작성 완료</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => emptyText()}
                    style={{flex:1}}
                >
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

    /* content */
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
        flexDirection:"row",
        paddingHorizontal:20,
        paddingTop:5,
        paddingBottom:10,
        justifyContent:"center",
    },
    longBtnText:{
        color:"#fff",
        textAlign:"center",
    },
    iconCheck:{
        marginLeft:10,
    },
    bigBtn:{
        flex:1,
        paddingVertical:15,
        fontSize:18,
        textAlign:"center",
        color:"#fff",
    },

    /* modal */
    modalWrap: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    modalView: {
        padding:35,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:10,
    },
    modalText: {
        textAlign: 'center',
    },
    modalClose:{
        padding:10,
        backgroundColor: '#2196F3',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});