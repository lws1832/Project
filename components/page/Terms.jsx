import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Terms(){
    return(
        <View style={styles.container}>
            <Text>개인정보 이용약관 페이지</Text>
        </View>
    )
} 
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
  })