import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import InquireScreen from '../page/Inquire';
import InquireHistoryScreen from '../page/InquireHistory';

const Tab = createMaterialTopTabNavigator();

const NaviInq = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="1:1 문의하기" component={InquireScreen} />
            <Tab.Screen name="나의 문의 내역" component={InquireHistoryScreen} />
        </Tab.Navigator>
    );
}

export default NaviInq;