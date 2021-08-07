
import * as React from 'react';
import { StyleSheet, Keyboard,Text, View } from 'react-native';
import Profile from './Components/Menu/Profile';


export default function App() {

  return (
   <View style={styles.main}>
     <Profile />
     <Text>git pushasdasdasd
       asdsadasdasd
     </Text>
   </View>
  );
}

const styles=StyleSheet.create({
  main:{
    flex:3,
    justifyContent:"center"
  },
 
})



