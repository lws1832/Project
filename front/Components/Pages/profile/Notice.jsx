
import React,{useState} from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';


import NoticeList from './NoticeList';

// import { Container } from '../../../public/appPublic';

export default function NoticePages (){
    const handleonClick=()=>{

    }
    // const initTitle =[{
    //     title:"메인 타이틀",
    //     date:"서브 타이틀 2021-08-09",
    //     key:"1"
    // },{
    //     title:"메인 타이틀",
    //     date:"공지 타이틀 2021-08-09",
    //     key:"2"
    // },{
    //     title:"메인 타이틀",
    //     date:"개인정보 타이틀 2021-08-09",
    //     key:"3"
    // }]
    // console.log(initTitle)
    // const [todos,setTodos] = useState(initTitle);
    return(
        <View style={styles.container}>
            <NoticeList />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ececec"
    },
  })



