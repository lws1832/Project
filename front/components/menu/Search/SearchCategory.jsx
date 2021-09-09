import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SearchCategory(){
    return(
        <View style={styles.resultCategory}>
            <Text style={{...styles.ctgText, flex:1, textAlign:"center"}}>호선</Text>
            <Text style={{...styles.ctgText, flex:2}}>역 이름</Text>
            <Text style={{...styles.ctgText, flex:2}}>역 방향</Text>
            <Text style={{...styles.ctgText, flex:1, textAlign:"center"}}>북마크</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultCategory:{
        flex:1,
        height:30,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:5,
        backgroundColor:"lightgray",
    },
})