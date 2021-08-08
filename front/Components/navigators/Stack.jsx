import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import InfoPages from '../Pages/profile/Info';
import NoticePages from '../Pages/profile/Notice';
import PrivacyPages from '../Pages/profile/Privacy';
import QuestionPages from '../Pages/profile/Question';
import Profile from '../Menu/Profile';

const Stack = createNativeStackNavigator();

const RootStack =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="프로필" component={Profile} />
                <Stack.Screen name="내정보" component={InfoPages} />
                <Stack.Screen name="공지사항" component={NoticePages} />
                <Stack.Screen name="이용약관" component={PrivacyPages} />
                <Stack.Screen name="의견보내기" component={QuestionPages} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;