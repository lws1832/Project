import styled from "styled-components";
import {
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    SafeAreaView,
    TextInput,
} from "react-native";

import  Constants  from "expo-constants";

//colors
export const colors = {
    primary: "#332424",
    secondary: "#4d3636",
    tertiary: "#e6e6e6",
    alternative:"#999999",
    fff:"#fff",
};

const statusBarHeight = Constants.statusBarHeight;

//공지사항
export const ViewNotice = styled.Text`
    background-color: ${colors.fff};
    overflow: hidden;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    color: #424242;
    width: 350px;
    height: 200px;
    padding: 10px 50px;
    border:1px solid #000000;
    border-radius: 6px;
`

// flex: 1,
// fontSize: 18,
// paddingVertical: 10,
// borderRadius: 6,
// borderWidth: 1,
// borderColor: "black",
// backgroundColor:"#fff",
// color: '#424242',
// justifyContent:"center",
// alignItems:"center",
// paddingHorizontal:50,
// width: 350,
// height: 300,
export const Container = styled.SafeAreaView`
    background-color: ${colors.tertiary};
    padding: 20px;
    padding-bottom: 0px;
    flex: 1;
    padding-top: ${statusBarHeight}px;
`;

//헤더

export const HeaderView = styled.View`
margin-bottom: 10px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const HeaderTitle = styled.Text`
font-size: 35px;
font-weight: bold;
color: ${colors.tertiary};
letter-spacing: 2px;
font-style: italic;
`;

export const HeaderButton = styled.TouchableOpacity`
font-weight: bold;
color: ${colors.tertiary};
`;

//list
export  const ListContainer = styled.View`
    margin-bottom: 30px;
    flex: 1;
    padding-bottom: 40px;
`;

export const ListView = styled.TouchableHighlight`
    background-color: ${colors.secondary};
    min-height: 85px;
    width: 100%;
    padding: 15px;
    justify-content: space-around;
    margin-bottom: 15px;
    border-radius: 10px;
`;

export const ListViewHidden = styled.View`
    background-color: ${colors.tertiary};
    min-height: 85px;
    width: 100%;
    padding: 15px;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 15px;
    border-radius: 11px;
`;

export const HiddenButton = styled.TouchableOpacity`
    width: 55px;
    align-items: center;
`;

export const TodoText = styled.Text`
    font-style: 16px;
    letter-spacing: 1px;
    color: ${colors.tertiary};
`;

export const TodoDate = styled.Text`
    font-size: 10px;
    letter-spacing: 1px;
    color: ${colors.alternative};
    text-align: right;
    text-transform: uppercase;
`;

//text for swiped todo row
export const SwipedTodoText = styled(TodoText)`
    color: ${colors.alternative};
    font-style: italic;
    text-decoration: line-through;
`;

//modal
export const ModalButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${colors.tertiary};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    align-self: center;
    position: absolute;
    bottom: 15px;
`;

export const ModalContainer = styled.View`
    padding: 20px;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${colors.primary};
`;

export const ModalView = styled.View`
    background-color: ${colors.secondary};
    border-radius: 20px;
    padding: 35px;
`;

export const StyledInput = styled.TextInput`
    width: 300px;
    height: 50px;
    background-color: ${colors.tertiary};
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    color: ${colors.secondary};
    letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${(props)=>props.color};
    border-radius: 50px;
    justify-content: center;
    align-items:center;
    align-self: center;
`;

export const ModalActionGroup = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
`;

export const ModalIcon = styled.View`
    align-items: center;
    margin-bottom: 30px;
`;
