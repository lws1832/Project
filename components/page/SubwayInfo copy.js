import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

export default function SubwayInfo(){

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconBack}>
                    <AntDesign name="left" size={40} color="rgb(41, 128, 185)" />    
                </View>
                <View style={styles.iconBookmark}>
                    <FontAwesome name="star" size={40} color="rgb(241, 196, 15)" />
                </View>
            </View>
            <View style={styles.subject}>
                <Text style={styles.title}>실시간 역 정보</Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.line2}>2</Text>
                    <Text style={styles.line5}>5</Text>
                    <Text style={styles.subtitle}>동대문역사문화공원역</Text>
                </View>
            </View>
            <View style={styles.content1}>
                <View style={styles.iconSubway}>
                    <MaterialCommunityIcons name="subway-variant" size={24} color="#000" />
                </View>
                <View style={styles.line}>
                    <View style={{...styles.lineSort, ...styles.lineLeft}}>
                        <FontAwesome name="circle" size={20} color="#fff" />
                    </View>
                    <View style={styles.lineSort}>
                        <FontAwesome name="circle" size={20} color="#fff" />
                    </View>
                    <View style={styles.lineSort}>
                        <FontAwesome name="circle" size={40} color="rgb(142, 68, 173)" />
                    </View>
                    <View style={{...styles.lineSort, ...styles.lineRight}}>
                        <FontAwesome name="circle" size={20} color="#fff" />
                    </View>
                    {/* <View style={{...styles.stationSort, ...styles.stationLeft}} />
                    <View style={styles.stationSort} />
                    <View style={styles.stationSort}></View>
                    <View style={{...styles.stationSort, ...styles.staitonRight}} /> */}
                </View>
                <View style={styles.station}>
                    <Text style={{...styles.stationSort, ...styles.stationLeft}}>동대문역사박물관역</Text>
                    <Text style={styles.stationSort}>동대문역사박물관역</Text>
                    <Text style={styles.stationSort}>동대문역사박물관역</Text>
                    <Text style={{...styles.stationSort, ...styles.staitonRight}}>동대문역사박물관역</Text>
                </View>
            </View>
            <View style={styles.content2}>
                
            </View>
            <View style={styles.menu}>
                <View style={styles.menuBox}>
                    <View style={styles.menuSort}>
                        <AntDesign name="search1" size={40} color="#000" />
                    </View>
                    <View style={styles.menuSort}>
                    <Octicons name="bookmark" size={40} color="black" />
                    </View>
                    <View style={styles.menuSort}>
                        <Ionicons name="person" size={40} color="#000" />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    /* area */
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    header:{
        flex:1,
        marginTop:10,
        flexDirection:'row',
    },
    subject:{
        flex:2,
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    content1:{
        flex:3,
    },
    content2:{
        flex:3,
        backgroundColor:"pink",
    },
    menu:{
        flex:1,
        flexDirection:'row',
    },

    /* header */
    iconBack:{
        paddingVertical:10,
        paddingHorizontal:20,
    },
    iconBookmark:{
        paddingVertical:10,
        paddingHorizontal:20,
        marginLeft:"auto",
    },

    /* subject */
    title:{
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:40,
        fontWeight:"bold",
        color:"rgb(41, 128, 185)",
    },
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

    /* content1 */
    iconSubway:{
        flex:1,
        marginHorizontal:27,
        marginTop:20,
        marginBottom:-10,
    },
    line:{
        flex:0.8,
        flexDirection:"row",
        marginHorizontal:20,
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"rgb(142, 68, 173)",
        borderRadius:20,
    },
    lineSort:{
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
        paddingHorizontal:10,
        justifyContent:"space-between",
    },
    stationSort:{
        width:50,
        color:"#555",
        textAlign:"center",
    },
    stationLeft:{
        alignItems:"flex-start",
    },
    staitonRight:{
        alignItems:"flex-end",
    },

    /* menu */
    menuBox:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
    },
    menuSort:{
        flex:1,
        alignItems:"center"
    },

    bar:{
        width:'100%',
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green",
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start",
    }
});