import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Space from '../layout/Space';

export default function Bookmark(){
  const alertTest = () => {
    console.log('클릭함');
    Alert.alert("클릭함");
  }

  const lists = [
    {
      id:1,
      list:'천호역(방화행)'
    },
    {
      id:2,
      list:'천호역(하남 검단산행)'
    },
    {
      id:3,
      list:'군자역(마천행)'
    }
  ]

  const renderList = ({item})=>{
    return(
      <View style={styles.bookmarkList}>
        <View style={{flex:1}}>
          <MaterialCommunityIcons name="numeric-5-circle-outline" size={20} color="purple" />
        </View>
        <Text style={{...styles.bookmarkText}}>
          {item.list}
        </Text>
        <TouchableOpacity onPress={() => { alertTest() }}>
          <Text style={styles.delBtn}>해제</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <Space />
      
      {/* 페이지 명 */}
      <View style={styles.subject}>
          <Text style={styles.title}>북마크</Text>
      </View>

      {/* content */}
      <View style={styles.content}>
        <View style={styles.bookmarkBox}>
          <View style={styles.category}>
            <Text style={{ ...styles.categorySort, flex:1}}>호선</Text>
            <Text style={{ ...styles.categorySort, flex:4, paddingLeft:13, textAlign:"left"}}>역 이름</Text>
            <Text style={{ ...styles.categorySort, flex:1}}>해제</Text>
          </View>
          <View style={{ flex:10, justifyContent: 'space-between' }}>
            <FlatList
              data={lists}
              renderItem={renderList}
            />
          </View>
        </View>
      </View>

      <Space />

    </View>
  );
}

const styles = StyleSheet.create({
  /* area */
  container:{
    flex: 1,
    backgroundColor: "#fff",
  },
  content:{
    flex:7,
  },

  /* content */
  subject:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"flex-start",
  },
  title:{
      marginLeft:25,
      marginVertical:10,
      fontSize:40,
      fontWeight:"bold",
      color:"rgb(41, 128, 185)",
  },
  bookmarkBox:{
    flex:1,
    marginHorizontal:25,
    marginVertical:50,
  },
  category:{
    flex:1,
    flexDirection:"row",
    marginRight:5,
    paddingHorizontal:1,
    alignItems:"center",
    backgroundColor:"rgb(224, 224, 224)",
    borderRadius:8,
  },
  categorySort:{
    fontSize:15,
    fontWeight:"900",
    textAlign:"center",
  },
  bookmarkList:{
    flexDirection:'row',
    marginHorizontal:10,
    paddingHorizontal:5,
    paddingVertical:10,
    alignItems:"center",
    borderBottomWidth:2,
    borderBottomColor:'lightgray',
  },
  bookmarkText:{
    flex:8,
    marginLeft:21,
    fontSize:15,
    color:"#555",
  },
  delBtn:{
    padding:5,
    color:"#fff",
    backgroundColor:"rgb(94, 94, 94)",
    borderRadius:5,
  },
});