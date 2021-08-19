import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../menu/Profile';
import UserInfoScreen from '../page/UserInfo';
import NoticeScreen from '../page/Notice';
import InquireScreen from './NaviInq';
import TermsScreen from '../page/Terms';

const Stack = createNativeStackNavigator();

const NaviProf = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{headerShown:false}}
            />
            <Stack.Screen name="내 정보" component={UserInfoScreen} />
            <Stack.Screen name="공지사항" component={NoticeScreen} />
            <Stack.Screen name="문의 또는 의견 작성" component={InquireScreen} />
            <Stack.Screen name="이용 약관 및 개인 정보 처리 방침" component={TermsScreen} />
        </Stack.Navigator>
    );
}

export default NaviProf;