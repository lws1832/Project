import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { AntDesign} from '@expo/vector-icons';

export default function Logout({isLogin}){
    const logout = async (title, content) => {
        try {
            console.log(isLogin);
            console.log('111까지 옴');
            let url = `http://192.168.0.14:3000/user/delete`;
            let data = {
                id: 1,
            }
            try {
                console.log('222까지 옴');
                await fetch(url, {
                    method: 'DELETE',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('로그아웃 완료');
            } catch (e) {
                console.log(e);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <>
            <View style={styles.header}>
                <View style={styles.iconBookmark}>
                    <TouchableOpacity
                        style={styles.iconTouch}
                        onPress={() => { logout() }}
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