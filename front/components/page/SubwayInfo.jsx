import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Space from '../layout/Space';

export default function SubwayInfo({ route }){
    const [lineArr, setLineArr] = useState([]);     // 호선
    const [arrTime, setArrTime] = useState(null);   // 도착시간 

    useEffect(() => {
        const str = route.params.line;  // 받아온 호선들을 배열에 한 번 담고,
        setLineArr(str.split(','));     // 콤마 빼고 따로 나눠서 변수에 다시 배열로 담음
    }, []);

    return(
        <View style={styles.container}>

            <Space />

            {/* content1 */}
            <View style={styles.content1}>

                {/* 호선, 역 이름 - 63 경의중앙선 / 65 공항철도 / 67 경춘선 / 75 수인분당선 / 77 신분당선 */}
                <View style={{ flexDirection: "row", marginHorizontal:20, alignItems:"center"}}>
                    {
                        lineArr.map((v, k) => {
                            return(
                                <Text
                                    key={k}
                                    style={{
                                        ...styles.lines,
                                        backgroundColor:
                                        v[2]+v[3] == 1 ? '#0052A4' : (
                                            v[2]+v[3] == 2 ? '#009D3E' : (
                                                v[2]+v[3] == 3 ? '#EF7C1C' : (
                                                    v[2]+v[3] == 4 ? '#00A5DE' : (
                                                        v[2]+v[3] == 5 ? '#996CAC' : (
                                                            v[2]+v[3] == 6 ? '#CD7C2F' : (
                                                                v[2]+v[3] == 7 ? '#747F00' : (
                                                                    v[2]+v[3] == 8 ? '#EA545D' : (
                                                                        v[2]+v[3] == 9 ? '#BB8336' : (
                                                                            v[2]+v[3] == 63 ? '#77C4A3' : (
                                                                                v[2]+v[3] == 65 ? '#0090D2' : (
                                                                                    v[2]+v[3] == 67 ? '#0C8E72' : (
                                                                                        v[2]+v[3] == 75 ? '#F5A200' : (
                                                                                            v[2]+v[3] == 77 ? '#D4003B' : (
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
                                        v[2] == 0
                                        ? v[3]
                                        : (
                                            v[2]+v[3] == 63
                                            ? '경의중앙'
                                            : (
                                                v[2]+v[3] == 65
                                                ? '공항'
                                                : (
                                                    v[2]+v[3] == 67
                                                    ? '경춘'
                                                    : (
                                                        v[2]+v[3] == 75
                                                        ? '수인분당'
                                                        : (
                                                            v[2]+v[3] == 77
                                                            ? '신분당'
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
                    }
                </View>
                <Text style={styles.subtitle}>{route.params.stnName}역</Text>

                {/* 열차 아이콘 */}
                <View style={styles.iconSubway}>
                    <MaterialCommunityIcons name="subway-variant" size={24} color="#000" />
                </View>

                {/* 열차 레일 */}
                <View style={styles.line}>
                    <View style={{marginLeft:10}}>
                        <FontAwesome name="circle" size={20} color="#fff" />
                    </View>
                    <View style={{marginLeft:78}}>
                        <FontAwesome name="circle" size={20} color="#fff" />
                    </View>
                    <View style={{marginLeft:190, position:"absolute"}}>
                        <View style={{top:-20,position:"absolute"}}>
                            <FontAwesome name="circle" size={40} color="#000" />
                        </View>
                        <View style={{top:-16,marginLeft:3,position:"absolute"}}>
                            <FontAwesome name="circle" size={32} color="#fff" />    
                        </View>
                        <View style={{top:-12,marginLeft:7,position:"absolute"}}>
                            <FontAwesome name="circle" size={24} color="#rgb(52, 152, 219)" />    
                        </View>
                    </View>
                    <View style={{marginLeft:170}}>
                        <FontAwesome name="circle" size={20} color="#fff" />
                    </View>
                </View>

                {/* 역 명 */}
                <View style={styles.station}>
                    <Text style={{...styles.stationSort, ...styles.stationLeft}}>{route.params.preeStn}역</Text>
                    <Text style={styles.stationSort}>{route.params.preStn}역</Text>
                    <Text style={styles.stationSort}>{route.params.stnName}역</Text>
                    <Text style={{...styles.stationSort, ...styles.staitonRight}}>{route.params.nextStn}역</Text>
                </View>
            </View>

            {/* content2 */}
            <View style={styles.content2}>
                <View style={{flex:1, marginLeft:185, justifyContent:"center"}}>
                    <Octicons name="triangle-up" size={60} color="#eee" />
                </View>
                <View style={{flex:5, backgroundColor:"#eee"}}>
                    <View style={{flex:1, marginHorizontal:20, paddingVertical:15, borderBottomWidth:1, borderBottomColor:"#777"}}>
                        <Text style={styles.toGo}>방화행</Text>
                        <View style={styles.carBox}>
                            <Text style={styles.car}>이번 열차</Text>
                            <Text style={styles.arriveTime}>곧 도착</Text>
                        </View>
                        <View style={styles.carBox}>
                            <Text style={styles.car}>다음 열차</Text>
                            <Text style={styles.arriveTime}>3분 30초</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:5, backgroundColor:"#eee"}}>
                    <View style={{flex:1, marginHorizontal:20, paddingVertical:15}}>
                        <Text style={styles.toGo}>마곡행</Text>
                        <View style={styles.carBox}>
                            <Text style={styles.car}>이번 열차</Text>
                            <Text style={styles.arriveTime}>1분 48초</Text>
                        </View>
                        <View style={styles.carBox}>
                            <Text style={styles.car}>다음 열차</Text>
                            <Text style={styles.arriveTime}>4분 7초</Text>
                        </View>
                    </View>
                </View>
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
    content1:{
        flex:3,
    },
    content2:{
        flex:4,
        marginHorizontal:20,
        marginBottom:10,
    },

    /* content1 */
    lines:{
        marginRight:3,
        paddingHorizontal:6,
        paddingVertical:2,
        fontSize:14,
        color:"#fff",
        borderRadius:20,
    },
    subtitle:{
        marginHorizontal:20,
        fontSize:40,
        fontWeight:"bold",
        color:"#000",
    },
    iconSubway:{
        flex:1,
        marginHorizontal:27,
        marginTop:20,
        marginBottom:10,
    },
    line:{
        flex:2,
        flexDirection:"row",
        marginHorizontal:20,
        alignItems:"center",
        backgroundColor:"#000",
        borderRadius:20,
    },
    lineSort:{
        position:"absolute",
        width:50,
        alignItems:"center",
    },
    lineLeft:{
        width:30,
        marginLeft:10,
        alignItems:"flex-start",
    },
    lineRight:{
        width:30,
        marginRight:10,
        alignItems:"flex-end",
    },
    station:{
        flex:2,
        flexDirection:"row",
        marginTop:3,
        paddingHorizontal:14,
        justifyContent:"space-between",
    },
    stationSort:{
        width:50,
        marginTop:5,
        color:"#555",
        textAlign:"center",
    },
    stationLeft:{
        alignItems:"flex-start",
    },
    staitonRight:{
        alignItems:"flex-end",
    },

    /* content2 */
    toGo:{
        fontSize:20,
        fontWeight:"bold",
    },
    carBox:{
        flexDirection:"row",
        marginTop:10,
    },
    car:{
        marginLeft:10,
    },
    arriveTime:{
        marginLeft:10,
        color:"red",
    },
});