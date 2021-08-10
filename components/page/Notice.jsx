import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';

import NoticeList from './NoticeList';

export default function Notice(){

    return(
        <ScrollView>
            <View style={styles.container}>
                <NoticeList />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    /* area */
    container:{
        flex:1,
        marginHorizontal:20,
        marginVertical:20,
    },
});