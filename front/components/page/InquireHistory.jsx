import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';

import InquireList from "./InquireList";

export default function InquireHistory(){
 
    return(
        <ScrollView style={styles.container}>
            <InquireList />
        </ScrollView>
    );
} 

const styles = StyleSheet.create({
    /* area */
    container:{
        flex:1,
        padding:10,
    },
});