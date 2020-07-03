import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #ececec;
  display: flex;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height : 0px;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Footer  = styled.KeyboardAvoidingView`
  flex: 3;
  background-color : #E6E6E6;
`;

export const ContentForm  = styled.View`
  flex: 1;
  background-color : #F7F7F7;
  margin: 25px;
  margin-top: -50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoImg = styled.Image`
  height : 120px;
  width : 120px;
  margin-top: -45px;
`;

export const TextInput = styled.TextInput `
  height: 45px;
  width: 90%;
  border-style: solid;
  border-width: 1px;
  border-radius: 23px;
  margin-top: 30px;
  padding: 10px;
  border-color: #c3c3c3;
  font-size: 15px;
`;

export const TitleLogin = styled.Text`
  font-weight: 700;
  font-size: 22px;
  color: #111111;
  margin-top: 25px; 
`;

export const ContentForgotRemember = styled.View`
  height: 45px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const ContentRemember = styled.View`
  height: 100%;
  flex-direction: row;
`;

export const TextForgot = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #6A2597;
`;

export const TextRemenber = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #c3c3c3;
  margin-left: 5px;
`;

export const CheckBox = styled.View`
  border-style: solid;
  border-radius: 3px;
  border-color: #c3c3c3;
  border-width: 1px;
  height: 15px;
  width: 15px;
`;

export const ContentButton = styled(LinearGradient)`
  height: 45px;
  width: 90%;
  border-style: solid;
  border-width: 1px;
  border-radius: 23px;
  font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;