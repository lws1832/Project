import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { AntDesign} from '@expo/vector-icons';

export default function Logout(){
    const [isLogin,setIsLogin] = useState(false);

    const alertTest = () => {
        console.log('클릭함');
        Alert.alert("클릭함");
    }

    return(
        <>
            <View style={styles.header}>
                <View style={styles.iconBookmark}>
                    <TouchableOpacity
                        style={styles.iconTouch}
                        onPress={() => { alertTest() }}
                    >
                        {
                            isLogin
                            ? <AntDesign name="logout" size={32} color="black" />
                            : <AntDesign name="login" size={32} color="black" />
                        }
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