import React, { useEffect,useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons, EvilIcons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import _ from 'lodash';

import Space from '../layout/Space';
import Subject from '../layout/Subject';

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
    const [subway, setSubway] = useState(null);         // 모든역정보
    const [error, setError] = useState(null);           // 에러메시지
    const [searchText, setSearctText] = useState('');   // 검색결과

    // onPressed 할 때 넘어가는 값
    const [line, setLine] = useState('');               // 연계호선명
    const [stnName, setStnName] = useState('');         // 역명
    const [preeStn, setPreeStn] = useState('');         // 이전x2역
    const [preStn, setPreStn] = useState('');           // 이전역
    const [nextStn, setNextStn] = useState('');         // 다음역
    const [arvTime,setArvTime] = useState('')           // 도착예정시간
    const [trnlineNm, setTrnlineNm] = useState('')      // 행-방면

    const [reLine, setReLine] = useState('');
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

    // 도착지방면 기준으로 중복 값 제거
    let lineData;
    let uniqData;
    const ChangeText = value => {
        const data = subway.filter( item => { 
            return matchName(item.statnNm, value) == true;
        })
        lineData = _.uniqBy(data, "subwayList")
        uniqData = _.uniqBy(data, "trainLineNm");
    }

    const postData = data => {
        console.log('Data extracting..');
        console.log(data);

        setLine(data.subwayList);

        console.log('현재역명 : ', data.statnNm)
        console.log('현재역ID : ', data.statnId) // 현재역 아이디값
        console.log('도착방면 : ?', data.trainLineNm)

        const statnFid = subway.filter(item => item.statnId === data.statnFid);          // 이전역
        const statnTid = subway.filter(item => item.statnId === data.statnTid);          // 다음역
        const preesFid = subway.filter(item => (item.statnId === statnFid[0].statnFid)); // 이전전역

        // console.log('checkout : ', preesFid, statnFid, statnTid);

        setStnName(data.statnNm);           // 현재역
        setPreeStn(preesFid[0].statnNm);    // 이전x2역
        setPreStn(statnFid[0].statnNm);     // 이전역
        setNextStn(statnTid[0].statnNm);    // 다음역
        setTrnlineNm(data.trainLineNm);     // 행-방면
        setArvTime(data.barvlDt);           // 도착시간

        // subway.filter(item => {
        //     return matchName(item.statnNm, searchText) == true;
        // })
        // .map(item => {
        //     return (
        //         console.log('444',e),
        //         console.log('555',item.statnNm),
        //         setLine(e),
        //         setStnName(item.statnNm),
        //         subway
        //         .filter(v => {
        //             return item.statnTid == v.statnId
        //         })
        //         .map(v => {
        //             return setNextStn(v.statnNm);
        //         }),
        //         subway
        //         .filter(v => {
        //             return item.statnFid == v.statnId
        //         })
        //         .map(v => {
        //             return (
        //                 setPreStn(v.statnNm),
        //                 subway
        //                 .filter(e => {
        //                     return v.statnFid == e.statnId
        //                 })
        //                 .map(e => {
        //                     return setPreeStn(e.statnNm);
        //                 })
        //             )
        //         })
        //     )
        // })
        // console.log('ppp : ',stnName, preeStn, preStn, nextStn);
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
                                                                                line, stnName, preeStn, preStn, nextStn, arvTime, trnlineNm
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
                                                                    <TouchableOpacity style={{ ...styles.listText, flex: 1, alignItems: "center" }}>
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