import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GoogleLogin from '../GoogleLogin';
import NaviMenu from './NaviMenu';

const Stack = createNativeStackNavigator();

const NaviLogin = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={ () => ({
                    "headerShown":false,
                })}
            >
                <Stack.Screen name="Googlelogin" component={GoogleLogin} />
                <Stack.Screen name="NaviMeun" component={NaviMenu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NaviLogin;