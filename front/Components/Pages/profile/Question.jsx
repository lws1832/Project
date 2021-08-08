import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

export default function QuestionPages(){
    return(
        <View style={styles.container}>
           <Text>의견 보내기</Text>
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