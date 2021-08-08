import React from "react";
import { View,Text,StyleSheet ,Button} from "react-native";

export default function PrivacyPages(){
    return(
        <View style={styles.container}>
            <Text>이용약관 페이지</Text>
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