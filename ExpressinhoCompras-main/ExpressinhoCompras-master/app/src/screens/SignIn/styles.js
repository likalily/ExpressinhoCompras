import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: #DFE6E9;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #6C5CE7;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
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
line-height: 33px;
color: #000000;
width: 160px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;