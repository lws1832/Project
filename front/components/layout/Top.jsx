import React from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { AntDesign, FontAwesome} from '@expo/vector-icons';

export default function Top(){
    const alertTest = () => {
        console.log('클릭함');
        Alert.alert("클릭함");
    }

    return(
        <>
            <View style={styles.header}>
                <View style={styles.iconBack}>
                    <TouchableOpacity
                        style={styles.iconTouch}
                        onPress={() => { alertTest() }}
                    >
                        <AntDesign name="left" size={32} color="rgb(41, 128, 185)" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconBookmark}>
                    <TouchableOpacity
                        style={styles.iconTouch}
                        onPress={() => { alertTest() }}
                    >
                        <FontAwesome name="star" size={32} color="rgb(241, 196, 15)" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        marginTop:10,
        flexDirection:'row',
    },
    iconBack:{
        padding:10,
    },
    iconBookmark:{
        padding:10,
        marginLeft:"auto",
    },
    iconTouch:{
        width:60,
        height:60,
        justifyContent:"center",
        alignItems:"center",
    },
});