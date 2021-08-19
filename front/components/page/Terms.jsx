import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';

import TermsList from './TermsList';

export default function Terms(){

    return(
        <ScrollView>
            <View style={styles.container}>
                <TermsList />
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