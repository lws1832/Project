import React, { useState,useContext,useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Alert,Text } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../CredentialsContext';
import { useNavigation } from '@react-navigation/native';
export default function Logout({}){
    const navigation = useNavigation(); 
    const [isLogin,setIsLogin] = useState(false);
    const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
    const alertTest = () => {
        console.log('클릭함');
        Alert.alert("클릭함");
    }
    const clearLogin = async() => {
 
        await AsyncStorage
        .removeItem('@User:Token')
        .then(() => {
            setStoredCredentials(""),
             setTimeout(() => {
                navigation.navigate('Googlelogin')
              }, 1000);
            console.log('UserToken 삭제: ', setStoredCredentials(""))
          })
        .catch((error) => console.log(error));
      };
      
      const clear= async()=>{
        let item = await AsyncStorage.getItem('@User:Token');
        let data = JSON.parse(item);
        console.log(data)
      }
    return(
        <>
            <View style={styles.header}>
                <View style={styles.iconBookmark}>
                    <TouchableOpacity
                        style={styles.iconTouch}
                        onPress={clearLogin}
                    >
                        {
                            isLogin
                            ? <AntDesign name="logout" size={32} color="black" />
                            : <AntDesign name="login" size={32} color="black" />
                        }
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={clearLogin}>
              <Text  >로그아웃</Text>
          </TouchableOpacity> */}
          <Text onPress={clear}>정보 사라졌는지 확인용</Text>
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