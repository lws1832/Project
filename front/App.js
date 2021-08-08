
import * as React from 'react';
import { StyleSheet, Keyboard,Text, View } from 'react-native';


import { Container } from 'react-dom';

import RootStack from './Components/navigators/Stack';

export default function App() {

  return (
      <RootStack />
  )
}

const styles=StyleSheet.create({
  main:{
    flex:3,
    justifyContent:"center"
  },
 
})



