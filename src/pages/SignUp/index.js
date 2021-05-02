import React, { useContext } from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {AuthContext} from '../../contexts/auth';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  Text,
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, senha, nome);
  }

  return (
    <Background>
      <Container>
        <Logo source={require("../../assets/Logo2.png")} />

        <Text>
          <Text>
            Crie sua conta!{"\n"}começe controlar sua grana{"\n"}da melhor
            forma!
          </Text>
        </Text>

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

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

        <SubmitButton onPress = {handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignIn")}>
          <LinkText>Já tenho uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
