import React, { useEffect,useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, EvilIcons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';

import Space from '../layout/Space';
import Subject from '../layout/Subject';

const API_KEY = "4e4e56716d637370313031745148516a";

/*
http://swopenAPI.seoul.go.kr/api/subway/4e4e56716d637370313031745148516a/xml/realtimeStationArrival/ALL

statnNm		지하철역명
statnFid	이전지하철역ID
statnId		다음지하철역ID
subwayList	연계호선ID(당역포함)
*/

export default function Search({navigation}){
    const [subway, setSubway] = useState(null);         // 모든 역 정보
    const [error, setError] = useState(null);           // 에러 메시지
    const [searchText, setSearctText] = useState('');   // 검색 결과

    // onPressed 할 때 넘어가는 값
    const [line, setLine] = useState('');       // 연계 호선 명
    const [stnName, setStnName] = useState(''); // 역 명
    const [preeStn, setPreeStn] = useState(''); // 이전x2 역
    const [preStn, setPreStn] = useState('');   // 이전 역
    const [nextStn, setNextStn] = useState(''); // 다음 역


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
    // name == 역 명, word == 검색 내용
    const matchName = (name, word) => {
        let wordLength = word.length;           // 검색 내용 길이
        name = name.substring(0, wordLength);   // 역 명 문자열을 가장 앞부터 검색 내용의 길이까지만큼 리턴

        // 역 명과 검색 내용이 같으면 그 값을 리턴
        return name == word && wordLength != 0;
    }

    const postData = () => {
        console.log('Data extracting..');

        subway.filter(item => {
            return matchName(item.statnNm, searchText) == true;
        })
        .map(item => {
            return (
                setLine(item.subwayList),
                setStnName(item.statnNm),
                subway
                .filter(v => {
                    return item.statnTid == v.statnId
                })
                .map(v => {
                    return console.log('콘솔확인용11',v),setNextStn(v.statnNm);
                }),
                subway
                .filter(v => {
                    return item.statnFid == v.statnId
                })
                .map(v => {
                    return (
                        setPreStn(v.statnNm),
                        subway
                        .filter(e => {
                            return v.statnFid == e.statnId
                        })
                        .map(e => {
                            return setPreeStn(e.statnNm);
                        })
                    )
                })
            )
        })
        console.log('ppp : ',stnName, preeStn, preStn, nextStn);
    }

    return (
        <View style={styles.container}>
            <Space />
            <Subject />

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
                                                <Text style={{...styles.ctgText, flex:2.5}}>역 이름</Text>
                                                <Text style={{...styles.ctgText, flex:1.5}}>역 방향</Text>
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
                                                            <View
                                                                key={k}
                                                                style={styles.result}
                                                            >
                                                                {/* 호선 */}
                                                                <View style={{...styles.listText, flex:1, flexDirection:"row", alignItems:"center"}}>
                                                                    <MaterialCommunityIcons
                                                                        name={`numeric-${item.subwayList[3]}-circle`}
                                                                        size={16}
                                                                        color="purple"
                                                                    />
                                                                    {
                                                                        item.subwayList[8] != null
                                                                        ? (
                                                                            <MaterialCommunityIcons
                                                                                name={`numeric-${item.subwayList[8]}-circle`}
                                                                                size={16}
                                                                                color="purple"
                                                                            />
                                                                        )
                                                                        : null
                                                                    }
                                                                </View>
                                                                
                                                                {/* 역 이름 */}
                                                                {/* {
                                                                    subway
                                                                    .filter(v => {
                                                                        return v.statnNm == item.ordkey != v.ordkey;
                                                                    })
                                                                    .map((v, k) => {
                                                                        console.log('check : ',v.statnNm)
                                                                        return <Text key={k} style={{...styles.listText, flex:2}}>
                                                                            {v.statnNm}
                                                                        </Text>
                                                                    })
                                                                } */}

                                                                {
                                                                    // console.log('전체 : ', item.statnFid)
                                                                    // console.log('11 : ',
                                                                    //     item
                                                                    // )
                                                                }

                                                                <TouchableOpacity
                                                                    style={{flex:2.5}}
                                                                    onPressIn={() => { postData () }}
                                                                    onPressOut={() => {navigation.navigate('실시간 역 정보', {
                                                                        line, stnName, preeStn, preStn, nextStn,
                                                                    })}}
                                                                >
                                                                    <Text style={styles.listText}>{item.statnNm}</Text>
                                                                </TouchableOpacity>

                                                                {/* 역 방향 */}
                                                                <Text style={{...styles.listText, flex:1.5}}>{item.bstatnNm}행</Text>

                                                                {/* 다음 역 */}
                                                                {/* {
                                                                    subway
                                                                    .filter(v => {
                                                                        return item.statnTid == v.statnId
                                                                    })
                                                                    .map((v, k) => {
                                                                        if (k == 1){
                                                                            return <Text key={k} style={{...styles.listText, flex:2}}>{v.statnNm}</Text>
                                                                        }
                                                                    })
                                                                } */}

                                                                {/* 북마크 */}
                                                                <TouchableOpacity style={{...styles.listText, flex:1, alignItems:"center"}}>
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
    }
});