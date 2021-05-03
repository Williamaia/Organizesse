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
  AreaText,
  Title,
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { signIn } = useContext(AuthContext);


  function handleLogin(){
    signIn(email, senha);
  }

  return (
    <Background>
      <Container>
        <Logo source={require("../../assets/Logo2.png")} />

        <AreaText>
          <Title>Bem Vindo!</Title>
          <Text>Acesse sua conta para começar a</Text>
          <Text>controlar sua grana</Text>
        </AreaText>

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
            secureTextEntry
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
