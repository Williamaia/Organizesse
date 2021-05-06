import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import HistoricoList from "../../components/HistoricoList";
import firebase from "../../services/firebaseConnection";
import {format} from 'date-fns';

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
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });

      await firebase.database().ref('historico')
        .child(uid)
        .orderByChild('data').equalTo(format(new Date, 'dd/MM/yyyy'))
        .limitToLast(10).on('value', (snapshot) => {
          setHistorico([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor
            };

            setHistorico(oldArray => [...oldArray, list].reverse());
          });
        });
    }

    loadList();
  }, []);

  return (
    <Background>
      <Header />
      <ContainerLogo>
        <Logo source={require("../../assets/Logo5.png")} />
      </ContainerLogo>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>
          R$ {saldo.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
        </Saldo>
      </Container>
      <Title>Ultimas movimentações</Title>
      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <HistoricoList data={item} />}
      />
    </Background>
  );
}
