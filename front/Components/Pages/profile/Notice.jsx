
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function NoticePages (){
    return(
        <View style={styles.container}>
            <Text>
                공지사항 페이지
            </Text>
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



