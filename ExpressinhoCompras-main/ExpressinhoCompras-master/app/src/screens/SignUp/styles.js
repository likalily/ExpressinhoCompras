import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: #DFE6E9;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 15px;
`;
export const InputModel = styled.View`
  width: 150%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 82px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 40px;
  background-color: #6C5CE7;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 160;
  right: 13;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 150px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #6C5CE7;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #9487ed;
  font-weight: bold;
  margin-left: 5px;
`;
export const ExpressinhoText = styled.Text`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 27px;
color: #000000;
width: 160px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 12px;
`;

export const ExpressText = styled.Text`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 11px;
color: #000000;
width: 250px;
left: 12px;
`;
