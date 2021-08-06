import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SubwayInfo from './components/page/SubwayInfo';
import Loading from './components/Loading';

export default function App(){
  const [isLoading,setIsLoading] = useState(true);
  console.log('1 : ', isLoading);

  useEffect(()=>{
    setIsLoading(false);
    console.log('2 : ',isLoading);
  },[])

  return isLoading ? <Loading /> : <SubwayInfo />;
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:"#FDF6AA",
    },
    text:{
        color:"#2c2c2c",
        fontSize:35,
    }
})