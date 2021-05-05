import React, { useContext } from "react";

import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";

import { AuthContext } from "../../contexts/auth";

import {
  Background,
  Container,
  Nome,
  Saldo,
  Title,
  Logo,
  ContainerLogo,
} from "./styles";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Background>
      <Header />
      <ContainerLogo>
        <Logo source={require("../../assets/Logo5.png")} />
      </ContainerLogo>
      <Container>
        <Nome>William</Nome>
        <Saldo>R$ 123,00</Saldo>
      </Container>
      <Title>Ultimas movimentações</Title>
    </Background>
  );
}
