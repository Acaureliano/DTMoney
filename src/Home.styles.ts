import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F0F2F5;
`;

export const StatusBar = styled.StatusBar`

`;

export const HeaderBackground = styled.View`
  height: 204px;
  width: 100%;
  padding-top: ${Platform.OS === 'android' ? 32 : 62}px;
  background-color: #5429cc;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Icon = styled.Image`
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  margin-left: 13px;
`;

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTransition = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  /* width: 130px; */
  height: 40px;
  padding: 11px 16px;
  border-radius: 5px;
  background-color: #6933ff;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
`;

export const CardsContainer = styled.View`
  height: 200px;
  background-color: black;
`;

export const Card01 = styled.View`
  height: 200px;
  background-color: red;
  margin: 0px 20px 0px 20px;
`;

export const Card02 = styled.View`
  height: 200px;
  background-color: blue;
  margin: 0px 20px 0px 20px;
`;

export const Card03 = styled.View`
  height: 200px;
  background-color: green;
  margin: 0px 20px 0px 20px;
`;
