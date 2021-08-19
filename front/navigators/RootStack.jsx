import React from 'react';

import { Colors } from './../components/styles';
const { primary, tertiary } = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../components/Login';
import Signup from '../components/Signup';
import Login2 from '../screens/Login2';
import Welcome from '../screens/Welcome';
import NaviMeun from '../components/navigator/NaviMenu';
import Googlelogin from '../components/Googlelogin';

const Stack = createNativeStackNavigator();

import { CredentialsContext } from './../components/CredentialsContext';
import { DrawerLayoutAndroid } from 'react-native';

const RootStack = () => {
    return (
 
                <NavigationContainer>
                    <Stack.Navigator>

                        <Stack.Screen name="Googlelogin" component={Googlelogin} />
                        <Stack.Screen name="Signup" component={Signup} />
                        <Stack.Screen name="NaviMeun" component={NaviMeun} />

                    </Stack.Navigator>
                </NavigationContainer>


    )
}
export default RootStack;