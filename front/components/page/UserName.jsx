import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';

import IPv4 from "../../ipconfig";

export default function UserName() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://${IPv4}:3000/user/read`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((users) => {
                setUsers(users);
                console.log(users.nickname)
                setLoading(false);
            });
    }, []);

    if (loading) return <Text></Text>;
    return (
        <View>
            <Text >{users.nickname}</Text>
        </View>
    );
}