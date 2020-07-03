import React from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import logo from '../../../assets/logo.png'

import { Container, Header, Footer, ContentForm, 
  LogoImg,TextInput, TitleLogin,ContentForgotRemember,
  TextForgot, CheckBox, ContentRemember, TextRemenber,
  ContentButton, Button, TextButton } from './styles';

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Header colors={['#A62A5C', '#6A2597']}>
        <LogoImg source={logo} resizeMode="contain">

        </LogoImg>
      </Header>
      <Footer behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ContentForm>
          <TitleLogin>
            CADASTRAR-SE
          </TitleLogin>
          <TextInput
            placeholder="Nome de usuário"
          />
          <TextInput
            textContentType="password"
            
            placeholder="Senha"
            
          />
          <ContentForgotRemember>
            <ContentRemember>
              <CheckBox/>
              <TextRemenber>
                Lembrar
              </TextRemenber>
            </ContentRemember>
            
            <TextForgot>
              Esqueci a senha
            </TextForgot>            
          </ContentForgotRemember>
          <ContentButton 
            colors={['#A62A5C', '#6A2597']}
            start={[0,1]}
          >
            <Button>
              <TextButton>
                CADASTRAR-SE
              </TextButton>
            </Button>
          </ContentButton>
        </ContentForm>
      </Footer>
     
    </Container>
    </TouchableWithoutFeedback>
  );
}

export default Login;