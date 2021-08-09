import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import QuestionScreen from '../page/Inquire';
import QuestionScreen2 from '../page/InquireList';

const Tab = createMaterialTopTabNavigator();

const NaviInq = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="1:1 문의하기" component={QuestionScreen} />
            <Tab.Screen name="나의 문의 내역" component={QuestionScreen2} />
        </Tab.Navigator>
    );
}

export default NaviInq;