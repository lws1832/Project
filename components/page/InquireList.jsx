import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function InquireList(){
    return(
        <View style={styles.container}>
            <Text>문의내역</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    /* area */
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
    content:{
        flex: 7,
    },
});