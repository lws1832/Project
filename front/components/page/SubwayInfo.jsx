import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import lineReducer from '../Store/lineReducer';
import Space from '../layout/Space';

export default function SubwayInfo({ route }){
    // // useReducer로 호선 출력 작업 중
    const [lineIcon, dispatch] = useReducer(lineReducer, 0);

    useEffect(() => {
        console.log('날것 : ', route.params.line);
        const str = route.params.line;
        const arr = str.split(',');
        arr.map(v => {
            switch(v){
                case 1001:
                    console.log('11');
                    dispatch({ type:'line 1'});
                case 1002:
                    console.log('22');
                    dispatch({ type:'line 2'});
                case 1003:
                    console.log('33');
                    dispatch({ type:'line 3'});
                case 1004:
                    console.log('44');
                    dispatch({ type:'line 4'});
                case 1005:
                    console.log('55');
                    dispatch({ type:'line 5'});
                case 1006:
                    console.log('66');
                    dispatch({ type:'line 6'});
                case 1007:
                    console.log('77');
                    dispatch({ type:'line 7'});
                case 1008:
                    console.log('88');
                    dispatch({ type:'line 8'});
                case 1009:
                    console.log('99');
                    dispatch({ type:'line 9'});
                default:
                    return v;
            }
        })
        


    //     console.log('searchInfo route : ', route.params);

    //     // if (route.params.line == 1001){
    //     //     dispatch({ type:'line 1'});
    //     // }
    }, []);


    return(
        <View style={styles.container}>

            <Space />

            {/* content1 */}
            <View style={styles.content1}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.line2}>2</Text>
                    <Text style={styles.line5}>5</Text>
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
    subtitle:{
        fontSize:30,
        fontWeight:"bold",
        color:"#000",
    },
    line2:{
        marginLeft:20,
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"rgb(22, 160, 133)",
        borderRadius:20,
    },
    line5:{
        marginRight:3,
        paddingHorizontal:10,
        paddingVertical:5,
        padding:5,
        fontSize:20,
        color:"#fff",
        backgroundColor:"rgb(142, 68, 173)",
        borderRadius:20,
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
});