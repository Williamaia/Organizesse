import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';

import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from './styles'



export default function SignIn() {
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none" 
          value={email}
          onChangeText={(text) => setEmail(text)}

          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none" 
          value={senha}
          onChangeText={(text) => setSenha(text)}
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
        <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}