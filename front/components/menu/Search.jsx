import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity} from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import _ from 'lodash';

import IPv4 from '../../ipconfig';
import Space from '../layout/Space';

const API_KEY = "4e4e56716d637370313031745148516a";

/*
http://swopenAPI.seoul.go.kr/api/subway/4e4e56716d637370313031745148516a/xml/realtimeStationArrival/ALL

statnNm		지하철역명
statnFid	이전지하철역ID
statnId		다음지하철역ID
subwayList	연계호선ID(당역포함)
trainLineNm 도착지방면
*/

export default function Search({navigation}){
    const [subway, setSubway] = useState(null);         // 모든역정보(API)
    const [error, setError] = useState(null);           // 에러메시지
    const [searchText, setSearctText] = useState('');   // 검색결과

    const [line, setLine] = useState('');               // 연계호선명
    const [stnName, setStnName] = useState('');         // 역명
    const [preeStn, setPreeStn] = useState('');         // 이전x2역
    const [preStn, setPreStn] = useState('');           // 이전역
    const [nextStn, setNextStn] = useState('');         // 다음역
    const [arvTime,setArvTime] = useState('');          // 도착예정시간
    const [trnlineNm, setTrnlineNm] = useState('');     // 행-방면
    
    // 작업중
    const [storageIdx, setStorageIdx] = useState('');
    const [bookmark, setBookmark] = useState(null);

    useEffect(() => {
        const getSubway = async () => {
            try {
                setError(null); // 에러 메시지 초기화

                // 실시간 모든 지하철 역 정보
                const response = await axios.get(`http://swopenAPI.seoul.go.kr/api/subway/${API_KEY}/json/realtimeStationArrival/ALL`);
                
                setSubway(response.data.realtimeArrivalList);
            }
            catch (e) {
                setError(e); // 에러 메시지 초기화
                console.log('에러발생:', error);
            }
        }
        getSubway();
    }, []);

    // 역 명과 검색 내용을 매칭
    const matchName = (name, word) => {         // name == 역 명, word == 검색 내용
        let wordLength = word.length;           // 검색 내용 길이
        name = name.substring(0, wordLength);   // 역 명 문자열을 가장 앞부터 검색 내용의 길이까지만큼 리턴

        // 역 명과 검색 내용이 같으면 그 값을 리턴
        return name == word && wordLength != 0;
    }

    // 도착지방면 기준으로 중복 값 제거
    let lineData;
    let uniqData;
    const ChangeText = value => {
        const data = subway.filter(item => { 
            return matchName(item.statnNm, value) == true;
        })
        lineData = _.uniqBy(data, "subwayList");    // 호선 데이터
        uniqData = _.uniqBy(data, "trainLineNm");   // 행-방면 데이터
    }

    // 실시간 역 정보 페이지로 전달 할 데이터 추출
    const postData = data => {
        console.log('Data extracting..');

        const curr = subway.filter(item => (item.subwayId === data.subwayId && item.updnLine === data.updnLine && item.trainLineNm.split(' - ')[0] === data.trainLineNm.split(' - ')[0]));
        const statnFid = curr.filter(item => item.statnId === data.statnFid);            // 이전역
        const statnTid = curr.filter(item => item.statnId === data.statnTid);            // 다음역
        const preesFid = subway.filter(item => (item.statnId === statnFid[0].statnFid)); // 이전x2역

        setLine(data.subwayList);           // 호선
        setStnName(data.statnNm);           // 현재역
        setPreeStn(preesFid[0].statnNm);    // 이전x2역
        setPreStn(statnFid[0].statnNm);     // 이전역
        setNextStn(statnTid[0].statnNm);    // 다음역
        setTrnlineNm(data.trainLineNm);     // 행-방면
        setArvTime(data.barvlDt);           // 도착시간
    }

    // 로그인 중인 계정의 idx 가져오기
    const getIdx = async () => {
        try {
            let value = await AsyncStorage.getItem('@User:Token');
            let data = JSON.parse(value);
            const idx = data.id;
            setStorageIdx(idx);
        } catch (e) {
            console.log(e);
        }
    }

    // DB Bookmark GET
    let bookmarkData;
    const getBookmark = async () => {
        let getData = await axios.get(`http://${IPv4}:3000/bookmark/read`);
        bookmarkData = getData.data.result.filter(item => { 
            return item.idx == storageIdx;
        })
        setBookmark(bookmarkData);
        console.log('aaa : ', bookmark);
    }

    const matchBM = (name, word) => {
        return name == word;
    }

    // DB Bookmark POST
    const postBookmark = async (line, stnName, trnlineNm) => {
        try{
            console.log('postBookmark 접근중');
            let url = `http://${IPv4}:3000/bookmark/create`;
            let data = {
                idx:storageIdx,
                line:line,
                station:stnName,
                direction:trnlineNm,
            }
            try{
                console.log('postBookmark22');
                await fetch (url,{
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json',
                    },
                });
                console.log('postBookmark33');
            } catch (e){
                console.log(e);
            }
        } catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        getIdx();
        getBookmark();
    }, []);

    return (
        <View style={styles.container}>
            <Space />
            
            {/* 페이지 명 */}
            <View style={styles.subject}>
                <Text style={styles.title}>역 검색</Text>
            </View>

            {/* content */}
            <View style={styles.content}>
                {
                    subway != null // API 정보 변수에 입력 된 후 화면 출력
                    ? (
                        <>
                            {/* 검색 바 */}
                            <View style={styles.searchBox}>
                                <TextInput
                                    placeholder="지하철 명을 입력해주세요."
                                    type="text"
                                    value={searchText}
                                    onChangeText={text => setSearctText(text)}
                                    onChange={ChangeText(searchText)}
                                    style={styles.textBox}
                                />
                                <View style={styles.button}>
                                    <EvilIcons name="search" size={24} color="black" />
                                </View>
                            </View>
                            {
                                searchText != '' // 검색 창에 텍스트 입력 되었을 때 아래 검색 결과 출력
                                ? (
                                    <ScrollView>
                                        <View style={styles.resultBox}>
                                            
                                            {/* 검색 결과 카테고리 */}
                                            <View style={styles.resultCategory}>
                                                <Text style={{...styles.ctgText, flex:1, textAlign:"center"}}>호선</Text>
                                                <Text style={{...styles.ctgText, flex:2}}>역 이름</Text>
                                                <Text style={{...styles.ctgText, flex:2}}>역 방향</Text>
                                                <Text style={{...styles.ctgText, flex:1, textAlign:"center"}}>북마크</Text>
                                            </View>
                                            
                                            {/* 검색 결과 내용 */}
                                            <View style={styles.resultList}>
                                                {
                                                    subway.filter(item => {
                                                        return matchName(item.statnNm, searchText) == true;
                                                    })
                                                    .map((item, k) => {
                                                        return (
                                                            k >= uniqData.length
                                                            ? null
                                                            : (
                                                                <View
                                                                    key={k}
                                                                    style={styles.result}
                                                                >
                                                                    {/* 호선 */}
                                                                    <View style={{...styles.listText, flex: 1, flexDirection: "row", alignItems: "center"}}>
                                                                        {
                                                                            lineData.map((e, k) => {
                                                                                return e.subwayList.split(',')
                                                                                .map((r, k) => {
                                                                                    return (
                                                                                        <Text
                                                                                            key={k}
                                                                                            style={{
                                                                                                ...styles.lines,
                                                                                                backgroundColor:
                                                                                                r[2]+r[3] == 1 ? '#0052A4' : (
                                                                                                    r[2]+r[3] == 2 ? '#009D3E' : (
                                                                                                        r[2]+r[3] == 3 ? '#EF7C1C' : (
                                                                                                            r[2]+r[3] == 4 ? '#00A5DE' : (
                                                                                                                r[2]+r[3] == 5 ? '#996CAC' : (
                                                                                                                    r[2]+r[3] == 6 ? '#CD7C2F' : (
                                                                                                                        r[2]+r[3] == 7 ? '#747F00' : (
                                                                                                                            r[2]+r[3] == 8 ? '#EA545D' : (
                                                                                                                                r[2]+r[3] == 9 ? '#BB8336' : (
                                                                                                                                    r[2]+r[3] == 63 ? '#77C4A3' : (
                                                                                                                                        r[2]+r[3] == 65 ? '#0090D2' : (
                                                                                                                                            r[2]+r[3] == 67 ? '#0C8E72' : (
                                                                                                                                                r[2]+r[3] == 75 ? '#F5A200' : (
                                                                                                                                                    r[2]+r[3] == 77 ? '#D4003B' : (
                                                                                                                                                        null
                                                                                                                                                    )
                                                                                                                                                )
                                                                                                                                            )
                                                                                                                                        )
                                                                                                                                    )
                                                                                                                                )
                                                                                                                            )
                                                                                                                        )
                                                                                                                    )
                                                                                                                )
                                                                                                            )
                                                                                                        )
                                                                                                    )
                                                                                                )
                                                                                            }}
                                                                                        >
                                                                                        {
                                                                                            r[2] == 0
                                                                                            ? r[3]
                                                                                            : (
                                                                                                r[2]+r[3] == 63
                                                                                                ? '경'
                                                                                                : (
                                                                                                    r[2]+r[3] == 65
                                                                                                    ? '공'
                                                                                                    : (
                                                                                                        r[2]+r[3] == 67
                                                                                                        ? '경'
                                                                                                        : (
                                                                                                            r[2]+r[3] == 75
                                                                                                            ? '수'
                                                                                                            : (
                                                                                                                r[2]+r[3] == 77
                                                                                                                ? '신'
                                                                                                                : null
                                                                                                            )
                                                                                                        )
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        }
                                                                                        </Text>
                                                                                    )
                                                                                })
                                                                            })
                                                                        }
                                                                    </View>
                                                                    
                                                                    {/* 역 명 */}
                                                                    <TouchableOpacity
                                                                        style={{ flex: 2 }}
                                                                        onPressIn={() => { postData(uniqData[k]) }}
                                                                        onPressOut={() => {
                                                                            navigation.navigate('실시간 역 정보', {
                                                                                line, stnName, preeStn, preStn, nextStn, arvTime, trnlineNm,
                                                                            })
                                                                        }}
                                                                    >
                                                                        {
                                                                            k >= uniqData.length
                                                                            ? null
                                                                            : (
                                                                                <Text style={styles.listText}>
                                                                                    {uniqData[k].statnNm}
                                                                                </Text>
                                                                            )
                                                                        }
                                                                    </TouchableOpacity>

                                                                    {/* 역 방향 */}
                                                                    <Text style={{ ...styles.listText, flex: 2 }}>
                                                                            {
                                                                                k >= uniqData.length
                                                                                ? null
                                                                                : (
                                                                                    <Text>
                                                                                        {uniqData[k].trainLineNm}
                                                                                    </Text>
                                                                                )
                                                                            }
                                                                    </Text>

                                                                    {/* 북마크 */}
                                                                    <TouchableOpacity
                                                                        onPressIn={() => { postData(uniqData[k]) }}
                                                                        onPressOut={() => postBookmark(line, stnName, trnlineNm)}
                                                                        style={{ ...styles.listText, flex: 1, alignItems: "center" }}
                                                                    >
                                                                        <AntDesign
                                                                            name="star"
                                                                            size={20}
                                                                            color={
                                                                                bookmark == null /* 디비 연결 후 !=로 수정 */
                                                                                ? "rgb(255, 204, 0)"
                                                                                : "lightgray"
                                                                            }
                                                                        />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            )
                                                        )
                                                    })
                                                }
                                            </View>
                                        </View>
                                    </ScrollView>
                                )
                                : null
                            }
                        </>
                    )
                    : (
                        <View style={styles.Loading}>
                            <Text style={styles.LoadingText}>실시간 지하철 정보를 받아오는 중입니다.</Text>
                            <Text style={styles.LoadingText}>잠시만 기다려주세요!</Text>
                        </View>
                    )
                }
            </View>

            <Space />
        </View>
    );
}

const styles = StyleSheet.create({
    /* area */
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    content:{
        flex:7,
    },

    /* content */
    subject:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    title:{
        marginLeft:25,
        marginVertical:10,
        fontSize:40,
        fontWeight:"bold",
        color:"rgb(41, 128, 185)",
    },
    searchBox:{
        flexDirection:"row",
        marginHorizontal:20,
        marginTop:40,
        marginBottom:10,
        paddingHorizontal:10,
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth:1,
        borderRadius:10,
    },
    textBox:{
        width:250,
        height:50,
        padding:10,
        fontSize:15,
        justifyContent:'center',
        backgroundColor:'#fff',
    },
    button:{
        width:60,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    resultBox:{
        flex:1,
        marginHorizontal:20,
        alignItems:"center",
    },
    resultCategory:{
        flex:1,
        height:30,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:5,
        backgroundColor:"lightgray",
    },
    ctgText:{
        fontWeight:"bold",
    },
    lines:{
        marginRight:1,
        paddingHorizontal:2,
        paddingVertical:1,
        fontSize:8,
        color:"#fff",
        borderRadius:20,
    },
    resultList:{
        flex:10,
        alignItems:"center",
    },
    result:{
        flexDirection:"row",
        paddingVertical:5,
        alignItems:"center",
        borderBottomWidth:2,
        borderBottomColor:"lightgray",
    },
    listText:{
        justifyContent:"center",
    },

     /* loading */
     Loading:{
        flex:1,
        marginTop:100,
        marginBottom:200,
        marginHorizontal:30,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#000",
    },
    LoadingText:{
        fontSize:20,
        color:"#777",
    },
});