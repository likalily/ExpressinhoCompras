import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  ExpressinhoText,
  HeaderArea,
  ExpressText,
  InputModel,
} from './styles';

import Api from '../../Api';
import {UserContext} from '../../contexts/UserContext';

import Seletor from '../../components/Seletor';
import SignInput from '../../components/SignInput';

import LogoExpressinho from '../../assets/LogoExpressinho.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext); //dispatch(renomeado para userDispatch) constante para enviar informações para Context
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (nameField !== '' && emailField !== '' && passwordField !== '') {
      let res = await Api.signUp(nameField, emailField, passwordField);
      console.log(res);

      if (res.token) {
        await AsyncStorage.setItem('token', res.token); //Salva token no async storage

        userDispatch({
          type: 'setAvatar', //ação definida no reducer
          payload: {
            avatar: res.data.avatar, //avatar que será salvo no context
          },
        });

        navigation.reset({
          //impede usuário voltar para tela login
          routes: [{name: 'MainTab'}],
        });
      } else {
        alert('Erro: ' + res.error);
      }
    } else {
      alert('Preencha os campos');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      //Navega o usuário para uma rota e não permite voltar. Ao pressionar botão voltar, o aplicativo fecha/segundo plano.
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <HeaderArea>
      <LogoExpressinho width="172px"  height="160"> </LogoExpressinho> 

<ExpressinhoText>Expressinho Compras</ExpressinhoText>
</HeaderArea>

      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome completo"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu CPF"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu Celular"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

<HeaderArea>
  <Seletor></Seletor>
<ExpressText> Li e concordo com os TERMOS DE USO e com a POLÍTICA DE PRIVACIDADE</ExpressText>
</HeaderArea>
</InputArea>

<InputModel>
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Seguinte</CustomButtonText>
        </CustomButton>
        <LogoExpressinho width="94"></LogoExpressinho>
        </InputModel>
      

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};