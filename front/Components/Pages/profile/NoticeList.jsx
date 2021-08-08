import React from 'react';
import { StyleSheet, Keyboard,Text, View,Button } from 'react-native';


// import {
//     ListView,
//     ListViewHidden,
//     TodoText,
//     TodoDate,
//     HiddenButton,
//     SwipedTodoText,
//     colors
// } from "../../../public/appPublic";
// import { SwipeListView } from 'react-native-swipe-list-view';
// import {Entype} from '@expo/vector-icons';
const NoticeList=({}) => {
    return(
        // <SwipeListView 
        //     data={todos}
        //     renderItem={(data)=>{
        //         return(
        //             <ListView>
        //                 <>
        //                 <TodoText>{data.item.title}</TodoText>
        //                 <TodoDate>{data.item.date}</TodoDate>
        //                 </>
        //             </ListView>
        //         )
        //     }}
        //     renderHiddenItem={()=>{
        //         return (
        //             <ListViewHidden>
        //             <HiddenButton>
        //                 <Entype name="trash" size={25} />
        //             </HiddenButton>
        //             </ListViewHidden>)
        //     }}
        //     leftOpenValue={80}
        //     previewRowKey={"1"}
        //     previewOpenValue={80}
        //     previewOpenDelay={3000}
        //     disableLeftSwipe={true}
        //     showsVerticalScrollIndicator={false}
        //     style={{
        //         flex: 1, paddingBottom:30, marginBottom:40
        //     }}
        // />

        <View>
        <Text style={styles.list}>버전 업데이트 2021-08-08 </Text> 
        <Button title="보기" ></Button>
            <Text style={styles.subText}>안녕하세요 개발자입니다
                개인정보 보호법 제 39조의8(개인정보 이용내역이 통지)에 따라 모든 이용자분께
                개인정보 이용내역을 안내해 드리고 있습니다.
            </Text>
            <Text style={styles.list}>개인정보 이용동의 안내 2021-08-06 </Text>
            <Text style={styles.subText}>안녕하세요 개발자입니다
                개인정보 보호법 제 39조의8(개인정보 이용내역이 통지)에 따라 모든 이용자분께
                개인정보 이용내역을 안내해 드리고 있습니다.
            </Text>
            </View>
    )
}

const styles=StyleSheet.create({
    list:{
        fontSize: 22,
        paddingVertical: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "black",
        // paddingLeft: 1,
        marginTop: 30,
        backgroundColor:"#fff",
        color: '#424242',
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:50,
        width: 350,
        height: 50,
    },
    subText:{
        flex: 1,
        fontSize: 18,
        paddingVertical: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor:"#fff",
        color: '#424242',
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:50,
        width: 350,
        height: 300,
    }

  })

  export default NoticeList;