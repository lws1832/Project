import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function QuestionPages(){
    return(
        <View style={styles.container}>
            <Text>문의/의견 페이지</Text>
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