import React from 'react'
import styled from 'styled-components/native'

const InputArea = styled.View`
  width: 100%;
  height: 40px;
  background-color: #FFFFFF;
  flex-direction: row;
  border-radius: 10px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #000;
  margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#6C5CE7" />
      <Input
        placeholder={placeholder} 
        placeholderTextColor="#646464"
        value={value}
        onChangeText={onChangeText}        
        secureTextEntry={password}
      />
    </InputArea>
  )
}