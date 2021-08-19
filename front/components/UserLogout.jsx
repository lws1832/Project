
import React, { useState, useEffect } from "react";
import {View ,Text,TouchableOpacity,StyleSheet} from 'react-native';



 export default function UserLogout() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetch('http://172.30.1.6:3000/user/delete',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
      })
        .then((response) => response.json())
        .then((users) => {
          setUsers(users);
          console.log('로그아웃 안되나요',users)
          setLoading(false);
        });
    },[]);
    // if (loading) return <Text>Loading...</Text>;
    return (
        <TouchableOpacity>
          <Text style={styles.submitBtn} >로그아웃</Text>
        </TouchableOpacity>
      );
  }

  const styles = StyleSheet.create({
    /* area */
    submitBtn: {
      marginTop: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: "#000",
      backgroundColor: "rgba(39, 174, 170, 0.83)",
    }
  });