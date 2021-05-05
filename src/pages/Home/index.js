import React, { useContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import HistoricoList from "../../components/HistoricoList";

import { AuthContext } from "../../contexts/auth";

import {
  Background,
  Container,
  Nome,
  Saldo,
  Title,
  Logo,
  ContainerLogo,
  List,
} from "./styles";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'Receita', valor: 1200},
    {key: '2', tipo: 'Despesa', valor: 700},
    {key: '1', tipo: 'Receita', valor: 1700},
    {key: '2', tipo: 'Despesa', valor: 100}
  ]);

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
      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtator={item => item.key}
        renderItem={({ item }) => (<HistoricoList data={item}/>)}
      />
    </Background>
  );
}
