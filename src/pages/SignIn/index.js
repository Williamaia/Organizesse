import React, { useState ,useContext} from "react";
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';


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

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { user } = useContext(AuthContext);

  function handleLogin(){
    console.log(user.nome);
  }

  return (
    <Background>
      <Container>
        <Logo source={require("../../assets/Logo2.png")} />

        <Text>
          <Text>Bem Vindo!{"\n"}Acesse sua conta para começar a{"\n"}controlar sua grana</Text>
        </Text>

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

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
