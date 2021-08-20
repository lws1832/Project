import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import axios from 'axios';
import Space from '../layout/Space';

const API_KEY = "4e4e56716d637370313031745148516a";

export default function SubwayInfo({ route }){
    const [lineArr, setLineArr] = useState([]); // 호선
    const [arrTime,setArrTime] = useState(null) //도착 시간 

    useEffect(() => {
        console.log('before split : ', route);
        const str = route.params.line;  // 배열에 한 번 담고,
        setLineArr(str.split(','));     // 콤마 빼고 따로 나눠서 변수에 다시 배열로 담음
    }, []);

    return(
        <View style={styles.container}>

            <Space />

            {/* content1 */}
            <View style={styles.content1}>

                {/* 호선, 역 이름 */}
                <View style={{ flexDirection: "row" }}>
                    {
                        lineArr.map(v => {
                            return(
                                <Text style={styles.line2}>
                                    {
                                        // 63 경의중앙선, 65 공항철도, 67 경춘선, 71 수인분당선, 77 신분당선
                                        console.log(v[2],v[3],v[2]+v[3]),
                                        v[2] == 0 && v[3]
                                    }
                                    {
                                        v[2] != 0 && v[2]+v[3]
                                    }
                                </Text>
                            )
                        })
                    }
                    <Text style={styles.subtitle}>{route.params.stnName}역</Text>
                </View>
                <View style={styles.iconSubway}>
                    <MaterialCommunityIcons name="subway-variant" size={24} color="#000" />
                </View>
                <View style={styles.line}>
                    <View style={{marginLeft:10}}>
                        <FontAwesome name="circle" size={20} color="#fff" />
                    </View>
                    <View style={{marginLeft:78}}>
                        <FontAwesome name="circle" size={20} color="#fff" />
                    </View>
                    <View style={{marginLeft:190, position:"absolute"}}>
                        <View style={{top:-20,position:"absolute"}}>
                            <FontAwesome name="circle" size={40} color="rgb(142, 68, 173)" />
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
                        <Text style={styles.toGo}>
                            {/* {console.log('방면====',route.params.trnlineNm)} */}
                            {route.params.trnlineNm}
                        </Text>
                        <View style={styles.carBox}>
                            <Text style={styles.car}>이번 열차</Text>
                            <Text style={styles.arriveTime}>곧 도착</Text>
                        </View>
                        <View style={styles.carBox}>
                            <Text style={styles.car}>다음 열차</Text>
                            <Text style={styles.arriveTime}></Text>
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
    subtitle:{
        fontSize:30,
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
        flex:1.5,
        flexDirection:"row",
        marginHorizontal:20,
        alignItems:"center",
        backgroundColor:"rgb(142, 68, 173)",
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
        flex:3,
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

    /* lineColor */
    line1:{
        marginLeft:20,
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#0052A4",
        borderRadius:20,
    },
    line2:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#009D3E",
        borderRadius:20,
    },
    line3:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#EF7C1C",
        borderRadius:20,
    },
    line4:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#00A5DE",
        borderRadius:20,
    },
    line5:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#996CAC",
        borderRadius:20,
    },
    line6:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#CD7C2F",
        borderRadius:20,
    },
    line7:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#747F00",
        borderRadius:20,
    },
    line8:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#EA545D",
        borderRadius:20,
    },
    line9:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#BB8336",
        borderRadius:20,
    },
    line63:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#77C4A3",
        borderRadius:20,
    },
    line65:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#0090D2",
        borderRadius:20,
    },
    line67:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#0C8E72",
        borderRadius:20,
    },
    line71:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#F5A200",
        borderRadius:20,
    },
    line71:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"#D4003B",
        borderRadius:20,
    },
});