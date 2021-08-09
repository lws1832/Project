import React,{useState} from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View,Modal } from 'react-native';


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


import {ViewNotice } from "../../../public/appPublic";
const NoticeList=({}) => {

    const [hidden, setHidden] = useState(false);
    const TextNotice = useState( ` 안녕하세요 개발자입니다
    개인정보 보호법 제{"\n"} 39조의8(개인정보 이용내역이 통지)에 따라 모든 이용자분께
    개인정보 이용내역을 안내해 드리고 있습니다.`);
//   const [changeText] = () => setHidden(!hidden);
  const [changeText,setchangeText]  = useState(true)
  const [shoulShow,setshoulShow] =useState(true);
return(
    <SafeAreaView style={{flex:1}}>
        <View>
        <Text style={styles.list} onPress={()=>setshoulShow(!shoulShow) }>버전 업데이트 2021-08-08{"\n"}클릭클릭 </Text>
        { 
            shoulShow ? (
                  <ViewNotice>
                    여기는 지금 공지사항 상세내용을 보여주는 영역입니다.
                   </ViewNotice>
                   ) : null
         }
        <Text style={styles.list}  onPress={()=>setchangeText(!changeText) }>개인정보 이용동의 안내 {"\n"}2021-08-06 </Text>
          { 
            changeText ? (
                  <ViewNotice>
                   안녕하세요 개발자입니다
    개인정보 보호법 제{"\n"} 39조의8(개인정보 이용내역이 통지)에 따라 모든 이용자분께
    개인정보 이용내역을 안내해 드리고 있습니다.
                   </ViewNotice>
                   ) : null
         }
        </View>
    </SafeAreaView>
)
    // return(
        
    //     // <SwipeListView 
    //     //     data={todos}
    //     //     renderItem={(data)=>{
    //     //         return(
    //     //             <ListView>
    //     //                 <>
    //     //                 <TodoText>{data.item.title}</TodoText>
    //     //                 <TodoDate>{data.item.date}</TodoDate>
    //     //                 </>
    //     //             </ListView>
    //     //         )
    //     //     }}
    //     //     renderHiddenItem={()=>{
    //     //         return (
    //     //             <ListViewHidden>
    //     //             <HiddenButton>
    //     //                 <Entype name="trash" size={25} />
    //     //             </HiddenButton>
    //     //             </ListViewHidden>)
    //     //     }}
    //     //     leftOpenValue={80}
    //     //     previewRowKey={"1"}
    //     //     previewOpenValue={80}
    //     //     previewOpenDelay={3000}
    //     //     disableLeftSwipe={true}
    //     //     showsVerticalScrollIndicator={false}
    //     //     style={{
    //     //         flex: 1, paddingBottom:30, marginBottom:40
    //     //     }}
    //     // />
        
    //     <View>
    //     <Text style={styles.list}>버전 업데이트 2021-08-08 </Text> 
    //     <Button title="보기" ></Button>
        
    //         <ViewNotice>안녕하세요 개발자입니다
    //             개인정보 보호법 제 39조의8(개인정보 이용내역이 통지)에 따라 모든 이용자분께
    //             개인정보 이용내역을 안내해 드리고 있습니다.
    //         </ViewNotice>
            
    //         <Text style={styles.list}  onPress={changeText }>개인정보 이용동의 안내 {"\n"}2021-08-06 </Text>
           
    //        <ViewNotice>
    //         {hidden ? '' : TextNotice}
    //         </ViewNotice>
    //         </View>
    // )
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
        height: 100,
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