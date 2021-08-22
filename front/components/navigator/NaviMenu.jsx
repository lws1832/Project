import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SearchScreen from '../navigator/NaviSearch';
import BookmarkScreen from '../menu/Bookmark';
import ProfileScreen from '../navigator/NaviProf';

const Tab = createBottomTabNavigator();

const NaviMenu = () => {
    return(
        <Tab.Navigator
            screenOptions={ ({route}) => ({
                "headerShown":false,                    // 헤더 감추기
                "tabBarActiveTintColor": "#1B2228",   // 활성화 색
                "tabBarInactiveTintColor": "#C7CDD3", // 비활성화 색
                "tabBarShowLabel": false,               // 텍스트 감추기
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    switch (route.name) {
                        case 'menuSearch':
                            iconName = 'magnify';
                            break;
                        case 'menuBookmark':
                            iconName = 'bookmark-multiple';
                            break;
                        case 'menuProfile':
                            iconName = 'account-box';
                            break;
                        default:
                            iconName = 'ab-testing';
                    }
                    return (
                        <MaterialCommunityIcons
                            size={size}
                            name={iconName}
                            color={color}
                        />
                    );
                },
            })}
        >
            <Tab.Screen name="menuSearch" component={SearchScreen} />
            <Tab.Screen name="menuBookmark" component={BookmarkScreen} />
            <Tab.Screen name="menuProfile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default NaviMenu;