import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import Header from "../../components/Header";
import HistoricoList from "../../components/HistoricoList";
import firebase from "../../services/firebaseConnection";
import { format, isPast } from "date-fns";

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
  // Estados dos componetes
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      // Pegar o saldo do usuario autenticado
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });

      // Pegar os dados do banco (Historico)
      await firebase
        .database()
        .ref("historico")
        .child(uid)
        .orderByChild("data")
        .equalTo(format(new Date(), "dd/MM/yyyy"))
        .limitToLast(10)
        .on("value", (snapshot) => {
          setHistorico([]);

          // Valores da consulta
          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
            };

            // Pegar valores existente e invertir a ordem da listagem do histórico
            setHistorico((oldArray) => [...oldArray, list].reverse());
          });
        });
    }
    loadList();
  }, []);

  function handleDelete(data) {

    if( isPast(new Date(data.data))) {
      alert('Você não pode excluir um registro antigo');
      return;
    }

    Alert.alert(
      'Atenção',
      `Deseja mesmo excluir essa movimentação? ${data.tipo} - ${data.valor}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => handleDeleteSuccess(data),
        },
      ]
    );
  }

  async function handleDeleteSuccess(data) {
    await firebase
      .database()
      .ref("historico")
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let saldoatual = saldo;
        data.tipo === "Despesa"
          ? (saldoatual += parseFloat(data.valor))
          : (saldoatual -= parseFloat(data.valor));

          await firebase.database().ref('users').child(uid).child('saldo').set(saldoatual);

      }).catch((err) => {
        console.log(err);
      })
  }

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
        renderItem={({ item }) => (
          <HistoricoList data={item} deleteItem={handleDelete} />
        )}
      />
    </Background>
  );
}
