import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function TermsList(){
    const data = [
        {
            id: 1,
            title: '제1조(목적)',
            content:'본 약관은 "오디"가 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 당 앱의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.',
        },
        {
            id: 2,
            title: '제2조(용어의 정의)',
            content: '본 약관에서 사용하는 용어의 정의는 다음과 같습니다.\n\n① 사용자 : 본 약관에 따라 당 앱이 제공하는 서비스를 사용할 수 있는 자.\n② 가입 및 동의 : 당 앱이 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위\n③ 회원 : 당 앱에 개인정보 등 관련 정보를 제공하여 회원등록을 한 개인(재외국민, 국내거주 외국인 포함)또는 법인으로서 당 앱의0 정보를 제공 받으며, 당 앱이 제공하는 서비스를 이용할 수 있는 자.\n④ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 문자와 숫자의 조합으로 설정한 고유의 체계\n⑤ 비밀번호 : 사용자와 아이디가 일치하는지를 확인하고 통신상의 자신의 비밀보호를 위하여 사용자 자신이 선정한 문자와 숫자의 조합.\n⑥ 탈퇴 : 회원이 이용계약을 종료 시키는 행위\n⑦ 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및 이용규정에서 정의하거나 일반적인 개념에 의합니다.',
        },
        {
            id: 3,
            title: '제3조(약관의 효력과 변경)',
            content:'① 당 앱은 귀하가 본 약관 내용에 동의하는 것을 조건으로 귀하에게 서비스를 제공할 것이며, 귀하가 본 약관의 내용에 동의하는 경우, 당 앱의 서비스 제공 행위 및 귀하의 서비스 사용 행위에는 본 약관이 우선적으로 적용됩니다.\n② 당 앱은 본 약관을 변경할 수 있으며, 변경된 약관은 당 앱 내에 공지함으로써 사용자가 직접 확인하도록 할 것입니다. 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여 당 앱 내에 그 적용일자 30일 전부터 공지합니다. 약관 변경 공지 후 사용자가 명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하면, 사용자가 약관에 동의한 것으로 간주합니다. 사용자가 변경된 약관에 동의하지 아니하는 경우, 사용자는 본인의 회원등록을 취소(회원탈퇴)할 수 있습니다.',
        },
        {
            id: 4,
            title: '제4조(약관외 준칙)',
            content:'① 본 약관은 당 앱이 제공하는 서비스에 관한 이용규정 및 별도 약관과 함께 적용됩니다.\n② 본 약관에 명시되지 않은 사항은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법, 정보통신윤리위원회심의규정, 정보통신 윤리강령, 프로그램보호법 등 관계법령과 개인정보 처리방침 및 행정안전부가 별도로 정한 지침 등의 규정에 따릅니다.',
        },
        {
            id: 5,
            title: '제5조(회원정보의 통합관리)',
            content:'당 앱의 회원정보는 타 사이트의 회원정보와 통합하여 관리될 수 있습니다.',
        },
        {
            id: 6,
            title: '제6조(이용 계약의 성립)',
            content:
            `① 이용계약은 신청자가 온라인으로 당 앱에서 제공하는 소정의 가입신청 양식에서 요구하는 사항을 기록하고, 이 약관에 대한 동의를 완료한 경우에 성립됩니다.\n② 당 앱은 다음 각 호에 해당하는 사용계약에 대하여는 가입을 취소할 수 있습니다.
1. 다른 사람의 명의를 사용하여 신청하였을 때
2. 사용 계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때
3. 사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때
4. 다른 사람의 당 앱 서비스 사용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때
5. 당 앱을 사용하여 법령과 본 약관이 금지하는 행위를 하는 경우
6. 기타 당 앱이 정한 사용신청요건이 미비 되었을 때
③ 당 앱은 다음 각 호에 해당하는 경우 그 사유가 해소될 때까지 사용계약 성립을 유보할 수 있습니다.
1. 기술상의 장애사유로 인한 서비스 중단의 경우(시스템관리자의 고의·과실 없는 디스크장애, 시스템 다운 등)
2. 전기통신사업법에 의한 기간통신사업자가 전기통신 서비스를 중지하는 경우
3. 전시. 사변, 천재지변 또는 이에 준하는 국가 비상사태가 발생하거나 발생할 우려가 있는 경우
4. 긴급한 시스템 점검, 증설 및 교체설비의 보수 등을 위하여 부득이한 경우
5. 서비스 설비의 장애 또는 서비스 사용의 폭주 등 기타 서비스를 제공할 수 없는 사유가 발생한 경우
④ 당 앱이 제공하는 서비스는 아래와 같으며, 그 변경될 서비스의 내용을 사용자에게 공지하고 아래에서 정한 서비스를 변경하여 제공할 수 있습니다. 다만, 비회원에게는 서비스 중 일부만을 제공할 수 있습니다.
1. 당 앱 자체 개발하거나 다른 기관과의 협의 등을 통해 제공하는 일체의 서비스
            `,
        },
        {
            id: 7,
            title: '제7조(회원정보 사용에 대한 동의)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 8,
            title: '제8조(사용자의 정보 보안)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 9,
            title: '제9조(서비스 이용시간)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 10,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 11,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 12,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 13,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 14,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 15,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 16,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 17,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 18,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 19,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 20,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
        {
            id: 21,
            title: '제10조(서비스의 중지 및 정보의 저장과 사용)',
            content:'이용약관11\n이용약관22',
        },
    ]
 
    return(
        <>
            {
                data.map((e,k) => (
                    <TermsData
                        key={e.id}
                        title={e['title']}
                        content={e['content']}
                    />
                ))
            }
        </>
    );
}

function TermsData({title, content}){
    const [showTerms, setShowTerms] = useState(false);
    const [icon,setIcon] = useState("chevron-right");

    const onPressed = () => {
        setShowTerms(!showTerms);
        if (showTerms){
            setIcon("chevron-right");
        } else{
            setIcon("chevron-down");
        }
    }

    return(
        <>
            <TouchableOpacity
                style={{
                    ...styles.TermsList,
                    backgroundColor: showTerms ? "gray" : "#fff",
                }}
                onPress={onPressed}
            >
                <Text style={{
                    ...styles.TermsTitle,
                    color: showTerms ? "#fff" : "#000",
                }}>
                    {title}
                </Text>
                <View style={styles.iconEnter}>
                    <Entypo name={icon} size={20} color={showTerms ? "#fff" : "#000"} />
                </View>
            </TouchableOpacity>
                <View style={{
                    ...styles.TermsView,
                    display: showTerms ? 'flex' : 'none',
                }}>
                    <Text style={{ color: "#999" }}>{content}</Text>
                </View>
        </>
    );
}

const styles = StyleSheet.create({
    TermsList:{
        padding:20,
        borderWidth:1,
        borderColor:"lightgray",
        borderBottomWidth:1,
        borderBottomColor:"#333",
        backgroundColor:"#fff",
    },
    TermsTitle:{
        flex:1,
        fontSize:18,
        fontWeight:"900",
    },
    iconEnter:{
        position:"absolute",
        top:20,
        right:10,
    },
    TermsView:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderWidth:1,
        borderColor:"lightgray",
        borderBottomWidth:1,
        borderBottomColor:"#333",
        backgroundColor:"#fff",
    },
});