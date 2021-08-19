import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Loading() {
    return (
        <View style={styles.container}>

            {/* content */}
            <StatusBar barStyle={'default'} />
            <View style={styles.content}>
                <MaterialCommunityIcons name="subway-variant" size={100} color="#fff" />
                <View style={{marginLeft:10}}>
                    <Text style={styles.subTitle}>내가 찾는 지하철</Text>
                    <Text style={styles.title}>어디?</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    /* area */
    container: {
        flex: 1,
        backgroundColor: "#2980b9",
    },
    content: {
        marginHorizontal:40,
        marginVertical:150,
    },

    /* content */
    title:{
        fontSize:50,
        color:"#fff",
    },
    subTitle:{
        marginTop:20,
        fontSize:20,
        color:"#fff",
    }
});