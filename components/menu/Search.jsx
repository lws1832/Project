import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

import Space from '../layout/Space';
import Subject from '../layout/Subject';

export default function Search() {
  const [value, onChangeText] = React.useState('지역 또는 지하철 명을 입력하세요');

  const alertTest = () => {
    console.log('클릭함');
    Alert.alert("클릭함");
  }

  return (
    <View style={styles.container}>

      <Space />
      <Subject />

      {/* content */}
      <View style={styles.content}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.textBox}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={ ()=>{alertTest()} }
          >
            <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
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
  searchBox:{
    flexDirection: 'row',
    marginTop:140,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth:1,
    borderRadius:10,
  },
  textBox:{
    width: 250,
    height: 50,
    padding: 10,
    fontSize: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  button: {
    width: 60,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
  },
});